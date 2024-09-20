// Import the functions you need from the SDKs you need
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSiaV_3AVrTCBGAun0ApzfWYXMRBKl97k",
  authDomain: "quickstartmeditationapp.firebaseapp.com",
  projectId: "quickstartmeditationapp",
  storageBucket: "quickstartmeditationapp.appspot.com",
  messagingSenderId: "223758088756",
  appId: "1:223758088756:web:384ffae1c03ccfa39f2861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth and Firestore exports
export const auth = getAuth(app);
export const db = getFirestore(app);