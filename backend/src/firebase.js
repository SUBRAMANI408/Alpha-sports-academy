import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "alpha-sports-academy-f30a5.firebaseapp.com",
    projectId: "alpha-sports-academy-f30a5",
    storageBucket: "alpha-sports-academy-f30a5.firebasestorage.app",
    messagingSenderId: "990291565055",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);