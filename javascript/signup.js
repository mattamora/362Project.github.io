const database = firebase.database();
const auth = firebase.auth();

// Get elements
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const cardNumber = document.getElementById('cardNumber');
const cardName = document.getElementById('cardName');
const mmYY = document.getElementById('mmYY');
const cVV = document.getElementById('cVV');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zipCode');

// Sign Up Button
const signUpForm = document.getElementById('signup-button');

// Sign up function
signUpForm.addEventListener('click', (e) => {
  e.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const phoneNumberValue = phoneNumber.value;
  const cardNumberValue = cardNumber.value;
  const cardNameValue = cardName.value;
  const mmYYValue = mmYY.value;
  const cVVValue = cVV.value;
  const addressValue = address.value;
  const cityValue = city.value;
  const stateValue = state.value;
  const zipCodeValue = zipCode.value;

  
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed up:', user);

      // Add user details to the database
      database.ref('Users/' + user.uid).set({
        firstName: firstNameValue,
        lastName: lastNameValue,
        phoneNumber: phoneNumberValue,
        Payment: {
          cardNumber: cardNumberValue,
          cardName: cardNameValue,
          mmYY: mmYYValue,
          cVV: cVVValue
        },
        Address: {
          address: addressValue,
          city: cityValue,
          state: stateValue,
          zipCode: zipCodeValue
        }
        
      });
      console.log('Information stored in database');

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, errorMessage);
    });
});
