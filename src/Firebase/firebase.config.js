// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjQWhbiHarikTEw-yW6pPsHb4cHuygWlk",
  authDomain: "food-5a0c0.firebaseapp.com",
  projectId: "food-5a0c0",
  storageBucket: "food-5a0c0.appspot.com",
  messagingSenderId: "442048559758",
  appId: "1:442048559758:web:878c332057cdd6cc58a7df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);