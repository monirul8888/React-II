// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlwoGNyBGzxPDk1TwW4GAIafef2cm0CYc",
  authDomain: "email-pass-f8de9.firebaseapp.com",
  projectId: "email-pass-f8de9",
  storageBucket: "email-pass-f8de9.firebasestorage.app",
  messagingSenderId: "689035014188",
  appId: "1:689035014188:web:ee692364a05c33302e6189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);