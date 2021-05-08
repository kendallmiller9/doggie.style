import firebase from 'firebase/app';
//import firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react';
import App from './App.js'
import "firebase/analytics";
import 'firebase/firestore';
import "firebase/auth";
import "firebase/functions";
import "firebase/messaging";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
//import "firebase/collection";
require('firebase/auth');


const firebaseConfig = ({
     apiKey: "AIzaSyACuvwlU8gMZcwa7nux6rlkqEciXLurdEw",
     authDomain: "doggie-style.firebaseapp.com",
     projectId: "doggie-style",
     storageBucket: "doggie-style.appspot.com",
     messagingSenderId: "185025749444",
     appId: "1:185025749444:web:d4359dbd801250a8fe0491",
     measurementId: "G-9PMTYWS10N"
     });

const data = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default data;

