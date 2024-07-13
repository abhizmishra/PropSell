// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTH_API_KEY,
  authDomain: "real-state-d64ff.firebaseapp.com",
  projectId: "real-state-d64ff",
  storageBucket: "real-state-d64ff.appspot.com",
  messagingSenderId: "240279309016",
  appId: "1:240279309016:web:c9d41662f6f2cb592f25ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
