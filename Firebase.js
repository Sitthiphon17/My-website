// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAebOINfVYt6fo9TPqVTLBs4lIBMOWH-lw",
  authDomain: "healthbot-1228d.firebaseapp.com",
  projectId: "healthbot-1228d",
  storageBucket: "healthbot-1228d.firebasestorage.app",
  messagingSenderId: "197783458921",
  appId: "1:197783458921:web:b41a454e28abcf6b21fef8",
  measurementId: "G-Z1916P9YQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);