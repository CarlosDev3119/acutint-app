// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-d0U0PTXM6jddZRO4plOBeWwL02TcTos",
  authDomain: "react-app-f4c57.firebaseapp.com",
  projectId: "react-app-f4c57",
  storageBucket: "react-app-f4c57.appspot.com",
  messagingSenderId: "133498439381",
  appId: "1:133498439381:web:0cfbe4d3ad04808292845c",
  measurementId: "G-X335TCE0FP"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );