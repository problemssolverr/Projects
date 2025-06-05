import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVWSunY4dO20RJ2KJSavVMDYd5PDu19og",
  authDomain: "fumigation-admin-web.firebaseapp.com",
  projectId: "fumigation-admin-web",
  storageBucket: "fumigation-admin-web.firebasestorage.app",
  messagingSenderId: "89053133964",
  appId: "1:89053133964:web:be913f45fdc838aeab4fa9",
  measurementId: "G-PNJLYNG0H2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
