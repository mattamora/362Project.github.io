const database = firebase.database();
const auth = firebase.auth();

let currentOrderId = null;


const subTotal = document.getElementById('subTotalCart');
const tax = document.getElementById('taxCart');
const total = document.getElementById('totalCart');

window.onload = function(){
    const storedOrderID = localStorage.getItem('currentOrderID');
    if(storedOrderID){
      currentOrderId = storedOrderID
    }

    database.ref('Orders/' + currentOrderId).limitToFirst(3).on('value', (snapshot) =>{
        const data = snapshot.val();
    
        let count = 1
    
        let calcSubTotal = 0;
        let calcTaxRate = 0;
        let calcTotal = 0;
    
        for(let orderKey in data){
            const order = data[orderKey];
    
            if(order.hasOwnProperty('burgerAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);

                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;
    
                itemName.textContent = 'Burger';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Burger with: ' + Object.keys(order.burgerAddOns).filter(addOn => order.burgerAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('ribAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;
                
                itemName.textContent = 'Ribs';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Ribs with: ' + Object.keys(order.ribAddOns).filter(addOn => order.ribAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('ramenAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Ramen';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Ramen with: ' + Object.keys(order.ramenAddOns).filter(addOn => order.ramenAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('phoAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Pho';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Pho with: ' + Object.keys(order.phoAddOns).filter(addOn => order.phoAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('tacosAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Tacos';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Tacos with: ' + Object.keys(order.tacosAddOns).filter(addOn => order.tacosAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('burritoAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Burrito';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Burrito with: ' + Object.keys(order.burritoAddOns).filter(addOn => order.burritoAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('friesAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Fries';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Fries with: ' + Object.keys(order.friesAddOns).filter(addOn => order.friesAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('saladAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Salad';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Salad with: ' + Object.keys(order.saladAddOns).filter(addOn => order.saladAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('bobaAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Boba';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Boba: ' + Object.keys(order.bobaAddOns).filter(addOn => order.bobaAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
    
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
            if(order.hasOwnProperty('sodaAddOns')){
                //Cart Elements
                const itemName = document.getElementById('foodItemCart' + count);
                const itemPrice = document.getElementById('foodPriceCart' + count);
                const itemDesc = document.getElementById('foodDescCart' + count);
    
                let tempCost = 0;
                tempCost = order.cost + order.addOnCharges;

                itemName.textContent = 'Soda';
                itemPrice.textContent = '$ ' + tempCost.toFixed(2);
                itemDesc.textContent = 'Soda: ' + Object.keys(order.sodaAddOns).filter(addOn => order.sodaAddOns[addOn]).join(', ');
    
                if(order.requests){
                    itemDesc.textContent += '. Special requests: ' + order.requests;
                }
                
                calcSubTotal += order.cost + order.addOnCharges;
    
                count++;
            }
        }
    
        calcTaxRate = calcSubTotal * .0725;
    
        calcTotal = calcTaxRate + calcSubTotal;
    
        subTotal.textContent = '$ ' + calcSubTotal.toFixed(2);
        tax.textContent = '$ ' + calcTaxRate.toFixed(2);
        total.textContent = '$ ' + calcTotal.toFixed(2);
      })
  }
  

  