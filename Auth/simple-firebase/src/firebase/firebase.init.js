// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgX6ElQYRy1KE2LhsxuQenefkRj3fqsEY",
  authDomain: "simple-firebase-15a04.firebaseapp.com",
  projectId: "simple-firebase-15a04",
  storageBucket: "simple-firebase-15a04.firebasestorage.app",
  messagingSenderId: "545328458227",
  appId: "1:545328458227:web:84e3ad4242b80208868a86",
  measurementId: "G-89B9157L1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);