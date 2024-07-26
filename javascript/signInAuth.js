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
const auth = firebase.auth();

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in: ', user);
    } else {
        // User is signed out
        console.log('No user is signed in');
        window.location.href = 'sign_in.html'; // Redirect to sign-in page
    }
});

// Sign out function
// const signOutBtn = document.getElementById('signOutBtn');
// if (signOutBtn) {
//     signOutBtn.addEventListener('click', () => {
//         auth.signOut().then(() => {
//             console.log('User signed out');
//             window.location.href = 'sign_in.html'; // Redirect to sign-in page
//         }).catch((error) => {
//             console.log('Error signing out: ', error);
//         });
//     });
// }
