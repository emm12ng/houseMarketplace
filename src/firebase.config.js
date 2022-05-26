import { initializeApp } from "firebase/app"
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBz3tys_BTg5muy5XNmaQ7JFghiDqXtwAI",
  authDomain: "house-marketplace-app-585c0.firebaseapp.com",
  projectId: "house-marketplace-app-585c0",
  storageBucket: "house-marketplace-app-585c0.appspot.com",
  messagingSenderId: "558077439525",
  appId: "1:558077439525:web:7b6be011131946bb7d99cc"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()