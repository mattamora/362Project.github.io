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
      alert('Enter a vallid email');
      return;
    }

  if(password.length < 6){
    alert('Password must be at least 6 characters');
    return;
}
  console.log(email, password);

 auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {

    // Signed in
    const user = userCredential.user;
    console.log('User Signed in: ', user);
    alert('Successfully Signed In');
    window.location.href = 'account.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error: ', errorCode, errorMessage);
    alert('Error: Invalid Email or Password');

  })
});
