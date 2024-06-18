import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-df5e1.firebaseapp.com",
  projectId: "reactchat-df5e1",
  storageBucket: "reactchat-df5e1.appspot.com",
  messagingSenderId: "128803943731",
  appId: "1:128803943731:web:1bbfd3dff3549373213a46"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()