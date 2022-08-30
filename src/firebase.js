import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz3T5TUXwUqy8BrEeLpVkdKjhz-ndhYlA",
  authDomain: "blog-3982f.firebaseapp.com",
  projectId: "blog-3982f",
  storageBucket: "blog-3982f.appspot.com",
  messagingSenderId: "694782651816",
  appId: "1:694782651816:web:51a55b96009a96136c019d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
