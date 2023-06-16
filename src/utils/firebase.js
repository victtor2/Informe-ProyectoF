import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMVWedfOfrtZEbCh37yTJyPIHIUz49zIc",
  authDomain: "informe-proyectof.firebaseapp.com",
  projectId: "informe-proyectof",
  storageBucket: "informe-proyectof.appspot.com",
  messagingSenderId: "903886968590",
  appId: "1:903886968590:web:232e17d5263d403cf9695f"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);