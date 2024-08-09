
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTH_API_KEY,
  authDomain: "propsell-25e5c.firebaseapp.com",
  projectId: "propsell-25e5c",
  storageBucket: "propsell-25e5c.appspot.com",
  messagingSenderId: "768671738927",
  appId: "1:768671738927:web:4f317799cbc0dd568feada",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);