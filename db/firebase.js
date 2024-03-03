import { initializeApp } from 'firebase/app';

//Firebase Configuration From Firebase Project Settings
const firebaseConfig = {
    apiKey: "AIzaSyAB3VOyKn4dEXsLph2SbvIu_GMEJ3MzC-w",
    authDomain: "react-firebase-60e5a.firebaseapp.com",
    databaseURL: "https://react-firebase-60e5a-default-rtdb.firebaseio.com",
    projectId: "react-firebase-60e5a",
    storageBucket: "react-firebase-60e5a.appspot.com",
    messagingSenderId: "630133329311",
    appId: "1:630133329311:web:772f2c5f51c0d2643e01aa",
    measurementId: "G-L1WH5DSNKJ"
};

//Initialize Firebase Instance
const app = initializeApp(firebaseConfig);
export default app;