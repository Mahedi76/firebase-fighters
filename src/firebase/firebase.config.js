// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXd6ItQwKOlc57ClToapJWggub1QDu3RU",
  authDomain: "fir-fighters-6f775.firebaseapp.com",
  projectId: "fir-fighters-6f775",
  storageBucket: "fir-fighters-6f775.firebasestorage.app",
  messagingSenderId: "1009456086028",
  appId: "1:1009456086028:web:3c43c7f5755ef1a5334229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);