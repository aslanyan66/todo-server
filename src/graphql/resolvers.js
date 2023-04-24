import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { pubsub } from './index.js'
import firestore from '../firebase.js'
import { addTodo } from '../utils/index.js'

const resolvers = {
  Query: {
    // Fetch all todos from the Firestore 'todos' collection
    todos: async () => {
      const snapshot = await getDocs(collection(firestore, 'todos'))
      return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    },

    // Fetch a single todo with the given id from the Firestore 'todos' collection
    todo: async (_, { id }) => {
      const todoRef = doc(firestore, 'todos', id)
      const todoDocSnap = await getDoc(todoRef)
      return todoDocSnap.exists() ? { ...todoDocSnap.data(), id } : null
    },
  },
  Mutation: {
    // Create and return a new todo in the Firestore 'todos' collection
    createTodo: async (_, { title, isCompleted }) => {
      return await addTodo({ title, isCompleted })
    },
    // Update an existing todo with the given id in the Firestore 'todos' collection
    updateTodo: async (_, { id, ...rest }) => {
      const todoRef = doc(collection(firestore, 'todos'), id)
      await updateDoc(todoRef, { ...rest })
      const updatedTodoDoc = await getDoc(todoRef)
      return { ...updatedTodoDoc.data(), id }
    },
    // Delete an existing todo with the given id from the Firestore 'todos' collection
    deleteTodo: async (_, { id }) => {
      const todoRef = doc(collection(firestore, 'todos'), id)
      await deleteDoc(todoRef)
      return id
    },
  },
  Subscription: {
    todoAdded: {
      subscribe: () => {
        return pubsub.asyncIterator(['TODO_ADDED'])
      },
    },
  },
}

export default resolvers
