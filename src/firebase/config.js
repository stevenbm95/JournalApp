// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXfKhSMRYjptci0N_5KnSHwXWH3Ax4mDQ",
  authDomain: "jorunal-app-37dbd.firebaseapp.com",
  projectId: "jorunal-app-37dbd",
  storageBucket: "jorunal-app-37dbd.appspot.com",
  messagingSenderId: "271999149097",
  appId: "1:271999149097:web:2c3e1638eaab543c9a6838"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);