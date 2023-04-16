import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW0jyp7lpV2U05MQOYKh79jrsB2M-8oQ8",
  authDomain: "messenger123-1cc39.firebaseapp.com",
  projectId: "messenger123-1cc39",
  storageBucket: "messenger123-1cc39.appspot.com",
  messagingSenderId: "646873883008",
  appId: "1:646873883008:web:46707c1696a9aae0916165"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();