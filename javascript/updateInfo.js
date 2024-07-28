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

  //Update Button
  const updateInfo = document.getElementById('updateInfoButton');
  const updatePayment = document.getElementById('updatePaymentButton');

  //Fill in Blank Fields
  auth.onAuthStateChanged((user)=>{
  database.ref('Users/' + user.uid).once('value').then((snapshot) =>{
    const data = snapshot.val();
    if(data){
    emailInput.value = user.email || '';
    passwordInput.value = user.password || '';
    firstName.value = data.firstName || '';
    lastName.value = data.lastName || '';
    phoneNumber.value = data.phoneNumber || '';
    cardNumber.value = data.Payment.cardNumber || '';
    cardName.value = data.Payment.cardName || '';
    mmYY.value = data.Payment.mmYY || '';
    cVV.value = data.Payment.cVV || '';
    address.value = data.Address.address || '';
    city.value = data.Address.city || '';
    state.value = data.Address.state || '';
    zipCode.value = data.Address.zipCode || '';
    }
  }).catch((error)=>{
    console.error('Error retrieving data', error, error.code);
  })
  });

  //Update User Info
  updateInfo.addEventListener('click', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const phoneNumberValue = phoneNumber.value;
    

    //User.credential is for sign In/Up. currentUser is for any point after
    const user = auth.currentUser;

    if (user) {
        user.updateEmail(email).then(() => {
          user.updatePassword(password).then(() => {
            database.ref('Users/' + user.uid).update({
                        firstName: firstNameValue,
                        lastName: lastNameValue,
                        phoneNumber: phoneNumberValue,
                        
            }).then(() => {
              alert('User information updated successfully!');
            }).catch((error) => {
              console.error('Error updating user information:', error);
            });
          }).catch((error) => {
            console.error('Error updating password:', error);
            alert('Error: Sign in again.');

          });
        }).catch((error) => {
          console.error('Error updating email:', error);
          alert('Error: Sign in again.');
        });
      } else {
        console.error('No user is signed in.');
        alert('No user is signed in.');
      }
    });

    //Update User Payment
    updatePayment.addEventListener('click', (e)=>{
        e.preventDefault();
        const cardNumberValue = cardNumber.value;
        const cardNameValue = cardName.value;
        const mmYYValue = mmYY.value;
        const cVVValue = cVV.value;
        const addressValue = address.value;
        const cityValue = city.value;
        const stateValue = state.value;
        const zipCodeValue = zipCode.value;

        const user = auth.currentUser;

        if(user){
            database.ref('Users/' + user.uid).update({
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
            }).then(() => {
                alert('Payment Information Updated Successfully!');
              }).catch((error) => {
                console.error('Error updating user information:', error);
                alert('Error Updating Payment Information');
              });

        }else{
            console.error('No user is signed in.');
        }

    })