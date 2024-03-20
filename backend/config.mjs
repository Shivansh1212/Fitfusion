// const initializeApp = require('firebase/app');
// const {getFirestore, collection, getDocs} = require('firebase/firestore/lite');
// const firebase = require('firebase/compat/app');
// const { initializeApp } = require('firebase/compat/app');
// const { getFirestore } = require('firebase/compat/firestore');

// import firebase from 'firebase/compat/app';
// import  {initializeApp, } from 'firebase/compat/app';
// import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {firebaseApp, db};