import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
import { getFireStore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyARd2upxnfmthT94N1ZXlZWTiCIxzXm3ZE",
    authDomain: "react-firebase-fb27b.firebaseapp.com",
    projectId: "react-firebase-fb27b",
    storageBucket: "react-firebase-fb27b.appspot.com",
    messagingSenderId: "351563946379",
    appId: "1:351563946379:web:50baad7c031f7bc68bb78e",
    measurementId: "G-PP4Y6HV6Z8"
};

const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
export const auth = getAuth(app);
export const firestore = getFireStore();