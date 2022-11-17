import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAO7LP67ICqZJEGd6UoHQWBXuyl8vBQbAs",
  authDomain: "wp-clone-a1733.firebaseapp.com",
  projectId: "wp-clone-a1733",
  storageBucket: "wp-clone-a1733.appspot.com",
  messagingSenderId: "16419791035",
  appId: "1:16419791035:web:e9bf25a71333c03e7ac99e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
