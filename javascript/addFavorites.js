const database = firebase.database();
const auth = firebase.auth();

let currentMenu = null;

const burgerMenu = document.getElementById('burgerPopup')
const ribMenu = document.getElementById('ribsPopup')
const ramenMenu = document.getElementById('ramenPopup')
const phoMenu = document.getElementById('phoPopup')
const tacosMenu = document.getElementById('tacosPopup')
const burritoMenu = document.getElementById('burritoPopup')
const friesMenu = document.getElementById('friesPopup')
const saladMenu = document.getElementById('saladPopup')
const bobaMenu = document.getElementById('bobaPopup')
const sodaMenu = document.getElementById('sodaPopup')


const addFavorite = document.getElementById('addFavorite')
const removeFavorite = document.getElementById('removeFavorite')

burgerMenu.addEventListener('click', (e)=>{
    currentMenu = 'Burger';
    console.log('User Is On The Burger Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})

ribMenu.addEventListener('click', (e)=>{
    currentMenu = 'Ribs';
    console.log('User Is On The Ribs Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
ramenMenu.addEventListener('click', (e)=>{
    currentMenu = 'Ramen';
    console.log('User Is On The Ramen Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
phoMenu.addEventListener('click', (e)=>{
    currentMenu = 'Pho';
    console.log('User Is On The Pho Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
tacosMenu.addEventListener('click', (e)=>{
    currentMenu = 'Tacos';
    console.log('User Is On The Tacos Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
burritoMenu.addEventListener('click', (e)=>{
    currentMenu = 'Burrito';
    console.log('User Is On The Burrito Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
friesMenu.addEventListener('click', (e)=>{
    currentMenu = 'Fries';
    console.log('User Is On The Fries Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
saladMenu.addEventListener('click', (e)=>{
    currentMenu = 'Salad';
    console.log('User Is On The Salad Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
bobaMenu.addEventListener('click', (e)=>{
    currentMenu = 'Boba';
    console.log('User Is On The Boba Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})
sodaMenu.addEventListener('click', (e)=>{
    currentMenu = 'Soda';
    console.log('User Is On The Soda Menu');
    const user = auth.currentUser;

    if(user){
        database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).once('value').then(snapshot=>{
            if (snapshot.val() === null){
                removeFavorite.style.display = 'none';
                addFavorite.style.display = 'block';
                console.log('User has not added ' + currentMenu + ' to their favorites');
            }else{
                addFavorite.style.display = 'none';
                removeFavorite.style.display = 'block';
                console.log('User has ' + currentMenu + ' in their favorites');
            }
        })

        addFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).set({Favorite: true});
            console.log('User ' + user.email + ' has added ' + currentMenu + ' to their favorites ');
        })

        removeFavorite.addEventListener('click', (e)=>{
            database.ref('Users/' + user.uid + '/Favorites/' + currentMenu).remove();
            console.log('User ' + user.email + ' has removed ' + currentMenu + ' from their favorites ');
        })
    }
})

