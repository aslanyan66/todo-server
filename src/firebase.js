import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDOuiJycAeF5TO42BYjViigtugrtrc7fXk',
  authDomain: 'to-do-78a73.firebaseapp.com',
  projectId: 'to-do-78a73',
  storageBucket: 'to-do-78a73.appspot.com',
  messagingSenderId: '503654307344',
  appId: '1:503654307344:web:59cf3a1621ed700ab45c95',
  measurementId: 'G-6R9L1MN3WB'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
