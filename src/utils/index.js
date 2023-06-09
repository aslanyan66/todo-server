import {addDoc, collection, getDoc, getDocs, query, where, doc} from 'firebase/firestore'
import firestore from '../firebase.js'
import { pubsub } from '../graphql/index.js'

export const checkIfTodoExists = async (title) => {
  const todoQuery = query(collection(firestore, 'todos'), where('title', '==', title))
  const existingTodo = await getDocs(todoQuery)

  if (!existingTodo.empty) {
    throw new Error('Todo with this title already exists', 'TODO_ALREADY_EXISTS')
  }
}

export const addTodo = async (todo) => {

  const todoDocRef = await addDoc(collection(firestore, 'todos'), todo)
  const todoDoc = await getDoc(todoDocRef)

 return { ...todoDoc.data(), id: todoDoc.id }
}

export const generateRandomTodo = (delay = 180000 ) => {
  setInterval(async () => {
    const todo = await addTodo({
      title: Math.random().toString(36).substring(7),
      isCompleted: false,
    })

    await pubsub.publish('TODO_ADDED', { todoAdded: todo })
  }, delay)
}
