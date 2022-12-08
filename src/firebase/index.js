import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBElq-dUMqW6BgN90h-WVcj3s45AeHqh2w",
  authDomain: "portfolio-a637e.firebaseapp.com",
  projectId: "portfolio-a637e",
  storageBucket: "portfolio-a637e.appspot.com",
  messagingSenderId: "385533026738",
  appId: "1:385533026738:web:24790cef7f156b4c2f04ab",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
