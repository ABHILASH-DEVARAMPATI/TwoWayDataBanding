// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe58-lBhHnbmeNrTkQHafYO9jxcglbuiI",
  authDomain: "depobok-974fc.firebaseapp.com",
  projectId: "depobok-974fc",
  storageBucket: "depobok-974fc.firebasestorage.app",
  messagingSenderId: "590113491031",
  appId: "1:590113491031:web:afd96327010d28e23abb12",
  measurementId: "G-RX4MSQ71SW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;