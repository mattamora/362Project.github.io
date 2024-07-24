// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabse } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7eCOhlEQbvz1Xe5V2i5WuggMVlmDSgAc",
  authDomain: "resturant-362.firebaseapp.com",
  databaseURL: "https://resturant-362-default-rtdb.firebaseio.com",
  projectId: "resturant-362",
  storageBucket: "resturant-362.appspot.com",
  messagingSenderId: "178981724791",
  appId: "1:178981724791:web:170fbfef6cf39b0b795c72",
  measurementId: "G-MWFWB49H04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabse(app);

// Get elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpForm = document.getElementById('signup-form');

// Sign up function
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed up:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, errorMessage);
    });
});