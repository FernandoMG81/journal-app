// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments()

// Firebase configuration firebase/firestore/lite
// const firebaseConfig = {
//   apiKey: env.VITE_API_KEY,
//   authDomain: env.VITE_AUTH_DOMAIN,
//   projectId: env.VITE_PROJECT_ID,
//   storageBucket: env.VITE_STORAGE_BUCKET,
//   messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
//   appId: env.VITE_APP_ID
// };

// Firebase configuration for firebase/firestore
const firebaseConfig = {
  apiKey: 'AIzaSyDDUCmanqD2o4odbGELArFHu7wIAt3Iw7U',
  authDomain: 'journal-app-4744f.firebaseapp.com',
  projectId: "journal-app-4744f",
  storageBucket: "journal-app-4744f.appspot.com",
  messagingSenderId: "851684408558",
  appId: "1:851684408558:web:c07ecf4393f4975fc687ff"
};

//console.log(env);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )