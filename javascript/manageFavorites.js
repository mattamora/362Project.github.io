const database = firebase.database();
const auth = firebase.auth();


let count  = 1;

const menuItems = ['Burger', 'Ribs', 'Ramen', 'Pho', 'Tacos', 'Burrito', 'Fries', 'Salad', 'Boba', 'Soda'];

const removeFavorite = document.getElementById('removeFavorite' + count);

auth.onAuthStateChanged((user)=>{
menuItems.forEach(currentMenu=>{

    database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).limitToFirst(5).once('value').then(snapshot=>{

        if(snapshot.val() && snapshot.val().Favorite){
        if(currentMenu === 'Burger'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#american';
            favoriteItem.textContent = 'Burger';
            favoriteItemImage.src= 'pics/doubledouble.jpg';
            count++;
        }
        if(currentMenu === 'Ribs'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#american';
            favoriteItem.textContent = 'Ribs';
            favoriteItemImage.src = 'pics/ribs.jpg';

            count++;
        }
        if(currentMenu === 'Ramen'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#asian';
            favoriteItem.textContent = 'Ramen';
            favoriteItemImage.src = 'pics/ramen.jpg';

            count++;
        }
        if(currentMenu === 'Pho'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#asian';
            favoriteItem.textContent = 'Pho';
            favoriteItemImage.src = 'pics/pho.jpg';
        
            count++;
        }
        if(currentMenu === 'Tacos'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#mexican';
            favoriteItem.textContent = 'Tacos';
            favoriteItemImage.src = 'pics/tacos.jpg';

            count++;
        }
        if(currentMenu === 'Burrito'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#mexican';
            favoriteItem.textContent = 'Burrito';
            favoriteItemImage.src = 'pics/burrito3.jpg'
            
            count++;
        }
        if(currentMenu === 'Fries'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);
            
            orderFavorite.href = 'menu.html#sides';
            favoriteItem.textContent = 'Fries';
            favoriteItemImage.src = 'pics/fries.jpg';
            
            count++;
        }
        if(currentMenu === 'Salad'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#sides';
            favoriteItem.textContent = 'Salad';
            favoriteItemImage.src = 'pics/salad.jpg';

            count++;
        }
        if(currentMenu === 'Boba'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#drinks';
            favoriteItem.textContent = 'Boba';
            favoriteItemImage.src = 'pics/bobas.jpg';

            count++;
        }
        if(currentMenu === 'Soda'){
            const favoriteItem = document.getElementById('favoriteItem' + count);
            const favoriteItemImage = document.getElementById('favoriteItemImage' + count);
            const orderFavorite = document.getElementById('orderFavorite' + count);

            orderFavorite.href = 'menu.html#drinks';
            favoriteItem.textContent = 'Soda';
            favoriteItemImage.src = 'pics/soda.jpg';

            count++;
        }
    }
    })
    
})
})
