const auth = firebase.auth();

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in: ', user);
        window.location.href = "account.html"; // redirect to account page if signed in

    } else {
        // User is signed out
        console.log('No user is signed in');
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
