// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFyZfID9ontBrJmFhjXCrn_acB-nIdJts",
  authDomain: "radomime.firebaseapp.com",
  projectId: "radomime",
  storageBucket: "radomime.firebasestorage.app",
  messagingSenderId: "835362171922",
  appId: "1:835362171922:web:af48258b379635db6cbccb",
  measurementId: "G-S1WGXB3NF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);