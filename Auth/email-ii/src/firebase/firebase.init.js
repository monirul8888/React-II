// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIoLMYe4gVMRrb25noK-mJCue8wEA9TMk",
  authDomain: "email-ii.firebaseapp.com",
  projectId: "email-ii",
  storageBucket: "email-ii.firebasestorage.app",
  messagingSenderId: "879687717233",
  appId: "1:879687717233:web:d642961b681ac46c2ba6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);