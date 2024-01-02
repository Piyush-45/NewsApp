
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
export const firebaseConfig = {
  apiKey: "AIzaSyB0UcRCOAAL5TziNf5NU27YZRP-FVNNiuw",
  authDomain: "newsapp-26a60.firebaseapp.com",
  projectId: "newsapp-26a60",
  storageBucket: "newsapp-26a60.appspot.com",
  messagingSenderId: "1092803415425",
  appId: "1:1092803415425:web:f3ee2ecce94eea515c2c80"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIREBASE_DB = getFirestore(FIREBASE_APP)

// const auth = getAuth(app)