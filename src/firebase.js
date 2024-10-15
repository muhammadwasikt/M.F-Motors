import {getAuth, GoogleAuthProvider ,onAuthStateChanged , signOut , signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: 'AIzaSyBNeYM-GJ4WCBBe18mPXRnG3u5K7ghCQBo',
  authDomain: 'mf-motors.firebaseapp.com',
  projectId: 'mf-motors',
  storageBucket: 'mf-motors.appspot.com',
  messagingSenderId: '228978601416',
  appId: '1:228978601416:web:67c297a0519c3cd075a4fd'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth , provider , collection, addDoc, db ,onAuthStateChanged , getStorage, ref, uploadBytesResumable,signInWithEmailAndPassword , getDownloadURL ,signOut}