// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXWPLAZ6pK9fLCJJ2u-IE4RT2Ymk71Z68",
  authDomain: "expense-tracker-c90d2.firebaseapp.com",
  projectId: "expense-tracker-c90d2",
  storageBucket: "expense-tracker-c90d2.appspot.com",
  messagingSenderId: "120444812069",
  appId: "1:120444812069:web:6c4c199428829b78a9f8cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app ,auth};