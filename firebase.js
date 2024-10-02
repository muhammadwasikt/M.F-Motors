// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhj_zcUMgL4ppzqXjKnsbp2zsremfFdCI",
  authDomain: "bike-parts-app.firebaseapp.com",
  projectId: "bike-parts-app",
  storageBucket: "bike-parts-app.appspot.com",
  messagingSenderId: "961040519545",
  appId: "1:961040519545:web:24342c2be603530af29fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app , auth , provider}