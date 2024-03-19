import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU4qEfdSOAH_6zzP4sX7WzcqmCaPJFemE",
  authDomain: "notes-app-5e525.firebaseapp.com",
  projectId: "notes-app-5e525",
  storageBucket: "notes-app-5e525.appspot.com",
  messagingSenderId: "510160869380",
  appId: "1:510160869380:web:47b55afa8e14293b177d51",
  measurementId: "G-EF3NLL946W",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
