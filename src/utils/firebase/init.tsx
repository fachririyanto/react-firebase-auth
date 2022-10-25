import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export type FirebaseConfig = {
    appId               : string,
    apiKey              : string,
    projectId           : string,
    authDomain          : string,
    storageBucket       : string,
    databaseURL         : string,
    messagingSenderId   : string,
    measurementId       : string,
};

const firebaseConfig: FirebaseConfig = {
    appId               : import.meta.env.VITE_FIREBASE_APP_ID,
    apiKey              : import.meta.env.VITE_FIREBASE_API_KEY,
    projectId           : import.meta.env.VITE_FIREBASE_PROJECT_ID,
    authDomain          : import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    storageBucket       : import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    databaseURL         : import.meta.env.VITE_FIREBASE_DB_URL,
    messagingSenderId   : import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    measurementId       : import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp  = initializeApp( firebaseConfig );
export const firebaseAuth = getAuth();
export const firebaseDB   = getFirestore();