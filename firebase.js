import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "instagram-2-b71f5",
  storageBucket: "instagram-2-b71f5.appspot.com",
  messagingSenderId: "946089517222",
  appId: "1:946089517222:web:f7941b40f35368763dd467",
};

// Initialize Firebase
// Get the array of the apps which is initialized from firebase
// If it is null then initialize, else get the current app initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
