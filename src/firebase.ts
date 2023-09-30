// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeFmAcwhQ82HdiZMK-QEAKKcETCeiSSvs",
    authDomain: "kinder-prod-53437.firebaseapp.com",
    projectId: "kinder-prod-53437",
    storageBucket: "kinder-prod-53437.appspot.com",
    messagingSenderId: "528995725494",
    appId: "1:528995725494:web:98748d48418a8c22953617"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);