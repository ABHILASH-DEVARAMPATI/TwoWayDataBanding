import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBzx8mcn6_k4QJthKUavTir5gjNa7QqUbs",
  authDomain: "ang-auth-1dbf3.firebaseapp.com",
  projectId: "ang-auth-1dbf3",
  storageBucket: "ang-auth-1dbf3.firebasestorage.app",
  messagingSenderId: "64483420700",
  appId: "1:64483420700:web:e2d0c52472cabcbaba4dd9",
  measurementId: "G-HMBP0X857T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;