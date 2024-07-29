const database = firebase.database();
const auth = firebase.auth();


auth.onAuthStateChanged((user)=>{
if(user){
    database.ref('Users/' + user.uid + '/Orders/').once('value',(snapshot)=>{
        const data = snapshot.val();

        for(let burgerKey in data){
            console.log('Item: ' + burgerKey);
            console.log('Details: ', data[burgerKey]);
        }
    })
}
});