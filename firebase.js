// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA00AfBNOjfXQUwuP6s2AJ319vmoh7sPdo",
  authDomain: "insta-clone-cfc21.firebaseapp.com",
  projectId: "insta-clone-cfc21",
  storageBucket: "insta-clone-cfc21.appspot.com",
  messagingSenderId: "376260323642",
  appId: "1:376260323642:web:f90563951076727d6cc803",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
