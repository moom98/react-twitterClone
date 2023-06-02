// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMD6peq_O1Uar3d__x4LtdedB2eaTkOI",
  authDomain: "react-twitter-clone-3d344.firebaseapp.com",
  projectId: "react-twitter-clone-3d344",
  storageBucket: "react-twitter-clone-3d344.appspot.com",
  messagingSenderId: "855861083485",
  appId: "1:855861083485:web:b9e85e4044ac16b793fcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;