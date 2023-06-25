// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFjSmyGf-W9_m90VYqInCrtcjUxvwXh4s",
  authDomain: "king-s-library.firebaseapp.com",
  projectId: "king-s-library",
  storageBucket: "king-s-library.appspot.com",
  messagingSenderId: "685622937175",
  appId: "1:685622937175:web:621f916e72219bbdb40512",
  measurementId: "G-2H4HQET8W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;