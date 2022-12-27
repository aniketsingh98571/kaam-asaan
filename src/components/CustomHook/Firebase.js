import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDpHmaVm-sfZbDTJtkfe9rvAxPINpbn5SM",
    authDomain: "kaam-asaan-2131d.firebaseapp.com",
    projectId: "kaam-asaan-2131d",
    storageBucket: "kaam-asaan-2131d.appspot.com",
    messagingSenderId: "71272697285",
    appId: "1:71272697285:web:f4579e90a34e2257614fac",
    measurementId: "G-JGXJP6Y0YQ"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}