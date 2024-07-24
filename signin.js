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
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
  
//Elements
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signInForm = document.getElementById('signInBtn');

//Sign in Function
signInForm.addEventListener('click', (e) => {
    e.preventDefault();

 const email = emailInput.value.trim();
 const password = passwordInput.value;

  // Validate email format
  const emailFormat = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailFormat.test(email)) {
      console.log('Error: Invalid email format');
      return;
    }

  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {

    // Signed in
    const user = userCredential.user;
    console.log = ('User Signed in: ', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log = ('Error: ', errorCode, errorMessage);
  })
});