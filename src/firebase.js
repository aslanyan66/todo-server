import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA5KWhS4eyf1U7PGRaHG50FI_q_m0C4ung',
  authDomain: 'todo-list-4c8f7.firebaseapp.com',
  projectId: 'todo-list-4c8f7',
  storageBucket: 'todo-list-4c8f7.appspot.com',
  messagingSenderId: '252099478168',
  appId: '1:252099478168:web:5da8b89b07eda2934d06ed',
  measurementId: 'G-R6MPNXXQCP',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
