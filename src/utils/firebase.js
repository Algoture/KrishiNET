import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB812hWMDSvYcM_ScDHFIuRvYbvMUJXOwE",
  authDomain: "kriishinet.firebaseapp.com",
  projectId: "kriishinet",
  storageBucket: "kriishinet.appspot.com",
  messagingSenderId: "903746196171",
  appId: "1:903746196171:web:b3f5a75becce91ce11414e",
  measurementId: "G-VT3YVN951X"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);