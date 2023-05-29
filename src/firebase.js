import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt316sbHf8h7aJQnKzc1G8vxWFMvd_VSw",
  authDomain: "messenger1-c25c0.firebaseapp.com",
  projectId: "messenger1-c25c0",
  storageBucket: "messenger1-c25c0.appspot.com",
  messagingSenderId: "75215275952",
  appId: "1:75215275952:web:a59921c98baa5314c1f875"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();