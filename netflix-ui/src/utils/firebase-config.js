import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCwFE73ivMQLOBl9lOet-kJGv0-SZ-_Pzo",
  authDomain: "react-netflix-clone-5d422.firebaseapp.com",
  projectId: "react-netflix-clone-5d422",
  storageBucket: "react-netflix-clone-5d422.appspot.com",
  messagingSenderId: "197325088523",
  appId: "1:197325088523:web:0c1b11e2fcceac2896e40e",
  measurementId: "G-SEEGP7CH3N"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);