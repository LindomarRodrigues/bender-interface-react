import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBlxlddfFPqfWc1VU9-w5HfPLwcgOkbRYo",
    authDomain: "bender-c9ebe.firebaseapp.com",
    projectId: "bender-c9ebe",
    storageBucket: "bender-c9ebe.appspot.com",
    messagingSenderId: "33437171141",
    appId: "1:33437171141:web:ae4c5c81b58ebfc284dfac"
  };

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}