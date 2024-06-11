// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6b419.firebaseapp.com",
  projectId: "mern-estate-6b419",
  storageBucket: "mern-estate-6b419.appspot.com",
  messagingSenderId: "321774077151",
  appId: "1:321774077151:web:455ada3cfc271bb267956a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
