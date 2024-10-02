// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: "fasttube-aa2b1.firebaseapp.com",
  projectId: "fasttube-aa2b1",
  storageBucket: "fasttube-aa2b1.appspot.com",
  messagingSenderId: "813727330931",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-6F94EG1YW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

  

