import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBObGnch1AyI15RSy2iId1y2LDCBAPG-5Q",
  authDomain: "curecom-77950.firebaseapp.com",
  projectId: "curecom-77950",
  storageBucket: "curecom-77950.firebasestorage.app",
  messagingSenderId: "542653452655",
  appId: "1:542653452655:web:7bfcd080212f1b6ee4189a",
  measurementId: "G-JE32PSBCR4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
