// firebase.js
import { initializeApp } from 'firebase/app';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
    apiKey: "AIzaSyDsTxFhFGuzRv_NbPcw2a5zIVxDNqVpOfs",
    authDomain: "portfolio-b73ae.firebaseapp.com",
    databaseURL: "https://portfolio-b73ae.firebaseio.com",
    projectId: "portfolio-b73ae",
    storageBucket: "portfolio-b73ae.appspot.com",
    messagingSenderId: "93568968163",
    appId: "1:93568968163:web:cdaa18a0cf442de2d96cd6"
};

// setting a variable that initializes our application
const firebase = initializeApp(config);
// this exports the CONFIGURED version of firebase
export default firebase;