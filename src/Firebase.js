// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKGXvI_LzJQD_640K2AOAAr3oaUOnKNFA",
  authDomain: "fir-demo-b1d4c.firebaseapp.com",
  projectId: "fir-demo-b1d4c",
  storageBucket: "fir-demo-b1d4c.appspot.com",
  messagingSenderId: "761241919030",
  appId: "1:761241919030:web:d90c9258ae3bc02d770297",
  measurementId: "G-SMK5YF3QMG"
};

// Initialize Firebase
export const fireDb = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireDb);
