const auth = firebase.auth();

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (!user) {
        // User is signed in
        console.log('User is signed in: ', user);
        window.location.href = "guestcheckout.html"; // redirect to account page if signed in

    } else {
        // User is signed out
        console.log('User is signed in');
    }
});