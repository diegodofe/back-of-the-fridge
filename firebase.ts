// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNfehFeVAMgGfRlzl2ZiD2xvmblHuOHGs",
  authDomain: "back-of-the-fridge-b86a2.firebaseapp.com",
  projectId: "back-of-the-fridge-b86a2",
  storageBucket: "back-of-the-fridge-b86a2.appspot.com",
  messagingSenderId: "816503495155",
  appId: "1:816503495155:web:729fddf7e06bfed8371a86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
