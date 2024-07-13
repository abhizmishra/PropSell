import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

export const GAuth = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Create a new instance of the GoogleAuthProvider for Google sign-in authentication

      const auth = getAuth(app);
      // Initialize the Firebase authentication instance using the provided app which has come from firebse.js file

      const result = await signInWithPopup(auth, provider);
      // Use a popup window to sign in the user with their Google account and await the result

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-800 uppercase p-3 text-white rounded-lg hover:opacity-90
    "
    >
      Continue with Google
    </button>
  );
};

export default GAuth;
