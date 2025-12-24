// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDudQYxpUdNNjqQRm65czmZ_mhVfcBk7yg",
  authDomain: "netflixgpt-eb1c8.firebaseapp.com",
  projectId: "netflixgpt-eb1c8",
  storageBucket: "netflixgpt-eb1c8.firebasestorage.app",
  messagingSenderId: "655534290858",
  appId: "1:655534290858:web:0d7f96333ee5706748ddd3",
  measurementId: "G-VDCXX7V9PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth();

export const auth = getAuth(app); 