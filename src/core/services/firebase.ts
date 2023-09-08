import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV9SfedURrnz_QKdAzlIkvX4by0nkacEI",
    authDomain: "sample-dashboard-3d9d2.firebaseapp.com",
    projectId: "sample-dashboard-3d9d2",
    storageBucket: "sample-dashboard-3d9d2.appspot.com",
    messagingSenderId: "801630171276",
    appId: "1:801630171276:web:45670c7dcad1b1686c4ba9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };