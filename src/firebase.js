// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyAvV6ssnLI5sKW3VdmLPyar9JYoT3k7ecw",
        authDomain: "chatik-843ff.firebaseapp.com",
          projectId: "chatik-843ff",
            storageBucket: "chatik-843ff.firebasestorage.app",
              messagingSenderId: "217834909904",
                appId: "1:217834909904:web:db2b5527f05e51fe3c6ed5"
                };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();