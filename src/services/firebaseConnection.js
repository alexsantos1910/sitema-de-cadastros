
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyClQ4db96x2C5jkQnsizWjwYkITbXhdlMM",
    authDomain: "projeto-sistema-48ce3.firebaseapp.com",
    projectId: "projeto-sistema-48ce3",
    storageBucket: "projeto-sistema-48ce3.appspot.com",
    messagingSenderId: "604320320048",
    appId: "1:604320320048:web:9e39d9d9bea1f857547bf5",
    measurementId: "G-R3W0PWV58N"
  };


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };