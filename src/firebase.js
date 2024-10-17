import {getAuth, GoogleAuthProvider ,onAuthStateChanged , signOut , signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore ,  collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const apiKeys = import.meta.env.VITE_FIREBASE_API_KEY
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_FIREBASE_APP_ID

const firebaseConfig = {
  apiKey: apiKeys,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth , provider , collection, addDoc, db , getDocs ,onAuthStateChanged , getStorage, ref, uploadBytesResumable,signInWithEmailAndPassword , getDownloadURL ,signOut}