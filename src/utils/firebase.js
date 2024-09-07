import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

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