// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAz8zGFrwEzME8gwI0G4heY8tU2XME8b0",
  authDomain: "dragon-news-auth-d0b9d.firebaseapp.com",
  projectId: "dragon-news-auth-d0b9d",
  storageBucket: "dragon-news-auth-d0b9d.appspot.com",
  messagingSenderId: "152164218586",
  appId: "1:152164218586:web:7bce928cb56db57981d7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;