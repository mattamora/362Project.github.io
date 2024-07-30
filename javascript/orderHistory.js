const database = firebase.database();
const auth = firebase.auth();

let count = 1;


auth.onAuthStateChanged((user)=>{
if(user){
    database.ref('Users/' + user.uid + '/Orders/').limitToFirst(6).once('value',(snapshot)=>{
        const data = snapshot.val();

        for(let orderID in data){
            console.log('Order #' + count + ' : ' + orderID);

            let currentOrderNumber = 'Order #'+ count + ': ';
            
            database.ref('Users/' + user.uid + '/Orders/' + orderID).once('value', (snapshot)=>{
                const items = snapshot.val();
                let foodItemsArray = [];

                for(let foodItems in items){
                    const orderHistory = document.getElementById('orderId' + count);

                    let currentFood = foodItems.replace(/\d+/g, '');

                    foodItemsArray.push(currentFood);

                    console.log('Item Names: ', currentFood);
                    orderHistory.innerText = currentOrderNumber + foodItemsArray.join(', ');
                }
            })
            count++;
        }

    })
}
});