// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKlHJ2d00arvXS2_FQsa4xUQfzY81NZyM",
  authDomain: "booklms.firebaseapp.com",
  projectId: "booklms",
  storageBucket: "booklms.appspot.com",
  messagingSenderId: "420220993610",
  appId: "1:420220993610:web:8cc740d27404c63b3e26b3",
  measurementId: "G-XBWNFTBVVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);