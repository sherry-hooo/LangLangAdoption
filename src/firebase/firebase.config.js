// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhyJgl-z53WTGN-GKGlXQbI-96G5O81BU",
  authDomain: "langlangadoption.firebaseapp.com",
  projectId: "langlangadoption",
  storageBucket: "langlangadoption.appspot.com",
  messagingSenderId: "41909473658",
  appId: "1:41909473658:web:cf16788fcdf2dd729d06c3",
  measurementId: "G-BEXTX0KQW2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// export default db;
export default db;
