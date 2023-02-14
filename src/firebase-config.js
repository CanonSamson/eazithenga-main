import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"
// import FIREBASE_API_KEY  from "./.env"
const firebaseConfig = {
    apiKey: "AIzaSyALlXhk-Bj11ukpLjiz97hNb2ffSuC_UdE" ,
    authDomain: "eazithenga.firebaseapp.com",
    projectId: "eazithenga",
    storageBucket: "eazithenga.appspot.com",
    messagingSenderId: "56094058156",
    appId: "1:56094058156:web:fc472985ddcc7595056109",
    measurementId: "G-EJRBVW06GY"
  };

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore(app)