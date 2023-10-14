// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primeestatepro.firebaseapp.com",
  projectId: "primeestatepro",
  storageBucket: "primeestatepro.appspot.com",
  messagingSenderId: "9248989054",
  appId: "1:9248989054:web:f9add5b3727c0507d89d2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
