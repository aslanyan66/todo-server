import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCagKL9hrp73qf8-HDK0WU6UrBM0Z5lRkw",
  authDomain: "todo-ad2da.firebaseapp.com",
  projectId: "todo-ad2da",
  storageBucket: "todo-ad2da.appspot.com",
  messagingSenderId: "664171303039",
  appId: "1:664171303039:web:b61cf9abaa76e6a08b2f4a",
  measurementId: "G-FRNL50QZZ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;