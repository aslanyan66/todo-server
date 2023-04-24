import { addDoc, collection, getDoc } from 'firebase/firestore'
import firestore from '../firebase.js'
import { pubsub } from '../graphql/index.js'

export const addTodo = async (todo) => {
  const todoDocRef = await addDoc(collection(firestore, 'todos'), todo)
  const todoDoc = await getDoc(todoDocRef)

  return { ...todoDoc.data(), id: todoDoc.id }
}

export const getRandomTodo = (delay = 180000) => {
  setInterval(async () => {
    const todo = await addTodo({
      title: Math.random().toString(36).substring(7),
      isCompleted: false,
    })

    await pubsub.publish('TODO_ADDED', { todoAdded: todo })
  }, delay)
}
