import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBczMQN1Bi5mocSsdP-i5RhPVTy35aBEGo",
  authDomain: "news-app-a44e4.firebaseapp.com",
  projectId: "news-app-a44e4",
  storageBucket: "news-app-a44e4.appspot.com",
  messagingSenderId: "489217153813",
  appId: "1:489217153813:web:50e6e46cea0672e2b2a71c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
