// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoz94m4LNXf-6h4tmerdjEYdX-PXQYL9Q",
  authDomain: "bookdepo-a2041.firebaseapp.com",
  projectId: "bookdepo-a2041",
  storageBucket: "bookdepo-a2041.firebasestorage.app",
  messagingSenderId: "211329071842",
  appId: "1:211329071842:web:2759ee7c32f50704037cbb",
  measurementId: "G-20Q00Q9EWL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;