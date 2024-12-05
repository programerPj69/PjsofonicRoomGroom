// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuuRx-hFEnGcUY0_nV3_A_9mIKVzJRigY",
  authDomain: "room-groom.firebaseapp.com",
  databaseURL: "https://room-groom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "room-groom",
  storageBucket: "room-groom.firebasestorage.app",
  messagingSenderId: "297998294385",
  appId: "1:297998294385:web:8a7d71df76ddde17ae2ad0",
  measurementId: "G-8FS3F5VP6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);