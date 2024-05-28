import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKhCcnYmwwWVZeBhUK8x3siWio76_FXKM",
    authDomain: "sanya-loh-backend.firebaseapp.com",
    projectId: "sanya-loh-backend",
    storageBucket: "sanya-loh-backend.appspot.com",
    messagingSenderId: "182495298842",
    appId: "1:182495298842:web:507037d1277d25d9e198a3",
    measurementId: "G-SL4KN10CMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;