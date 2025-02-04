import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

REACT_APP_FIREBASE_API_KEY=AIzaSyAvV6ssnLI5sKW3VdmLPyar9JYoT3k7ecw
REACT_APP_FIREBASE_AUTH_DOMAIN=chatik-843ff.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=chatik-843ff
REACT_APP_FIREBASE_STORAGE_BUCKET=chatik-843ff.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=217834909904
REACT_APP_FIREBASE_APP_ID=1:217834909904:web:db2b5527f05e51fe3c6ed5


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
