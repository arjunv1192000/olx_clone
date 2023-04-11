import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyD6t_a8qGwZr8hN1xLXs_FaA8rX-p8rGCo",
    authDomain: "olxclone-4cb32.firebaseapp.com",
    projectId: "olxclone-4cb32",
    storageBucket: "olxclone-4cb32.appspot.com",
    messagingSenderId: "458952993456",
    appId: "1:458952993456:web:03b4389ec6c0085f32e975",
    measurementId: "G-HTLYK7L0TH"
  };



const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
export const auth = getAuth(app);

export default  firebase ;