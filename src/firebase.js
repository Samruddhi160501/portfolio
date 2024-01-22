// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGQE801L1gVlOtnHxXMbhkWoo7LUieCB4",
  authDomain: "portfolio-7e30f.firebaseapp.com",
  projectId: "portfolio-7e30f",
  storageBucket: "portfolio-7e30f.appspot.com",
  messagingSenderId: "765301961712",
  appId: "1:765301961712:web:8441c58d9d08b1af296335",
  measurementId: "G-0HLESQ9TKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);