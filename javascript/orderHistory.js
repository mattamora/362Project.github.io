const database = firebase.database();
const auth = firebase.auth();

let count = 1;

auth.onAuthStateChanged((user)=>{
if(user){
    database.ref('Users/' + user.uid + '/Orders/').once('value',(snapshot)=>{
        const data = snapshot.val();

        //burgerKey is OrderID 

        for(let orderID in data){
            console.log('Item: ' + orderID);
            console.log('Details: ', data[orderID]);
            count ++;
        }

    })
}
});