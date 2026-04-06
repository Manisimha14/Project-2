// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVSrj82kMzJ265vYymuxz9XbR1w6jXPXs",
  authDomain: "shop-5aeb4.firebaseapp.com",
  projectId: "shop-5aeb4",
  storageBucket: "shop-5aeb4.firebasestorage.app",
  messagingSenderId: "28634227602",
  appId: "1:28634227602:web:321488ce8ea8d7ae19d74b",
  measurementId: "G-E5NKN5GKD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
