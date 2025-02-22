// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEtQejYSNaw3uKBBmPrkEPiWglxkpjqp4",
  authDomain: "formulariorole.firebaseapp.com",
  projectId: "formulariorole",
  storageBucket: "formulariorole.firebasestorage.app",
  messagingSenderId: "748259831700",
  appId: "1:748259831700:web:9e28b9fc2ce3d8c22c2981",
  measurementId: "G-RRRFG0JVM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }