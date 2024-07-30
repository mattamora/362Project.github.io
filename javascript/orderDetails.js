  const database = firebase.database();
  const auth = firebase.auth();


  let currentOrderId = null;

  //Order Count
  let burgerCount = 0;
  let ribCount = 0;
  let ramenCount = 0;
  let phoCount = 0;
  let tacosCount = 0;
  let burritoCount = 0;
  let friesCount = 0;
  let saladCount = 0;
  let bobaCount = 0;
  let sodaCount = 0;

  function startNewOrder(){
    const newOrderReference = database.ref('Orders/').push();
    currentOrderId = newOrderReference.key;

    //Store ID for future inputs
    localStorage.setItem('currentOrderID', currentOrderId);
  }

  window.onload = function(){
    const storedOrderID = localStorage.getItem('currentOrderID');
    if(storedOrderID){
      currentOrderId = storedOrderID
    }else{
      startNewOrder();
    }
  }

  // window.onbeforeunload = function(){
  //   localStorage.removeItem('currentOrderID');

  //   //Might use it
  //   //localStorage.removeItem('orderCreationTime');
  // }

  //Burger Elements
  const burgerAddOns ={
  onions: document.getElementById('burgerOnions'),
  tomatoes: document.getElementById('burgerTomatoes'),
  lettuce: document.getElementById('burgerLettuce'),
  pickles: document.getElementById('burgerPickles'),
  ketchup: document.getElementById('burgerKetchup'),
  mayo: document.getElementById('burgerMayo'),
  jalapenos: document.getElementById('burgerJalapenos'),
  cheese: document.getElementById('burgerCheese'),
  bacon: document.getElementById('burgerBacon'),
  extraPatty: document.getElementById('burgerExtraPatty'),
  burgerRequests: document.getElementById('burgerRequests')
  }
  const addBurgerToCart = document.getElementById('addBurgerToCart');

  //Rib Elements
  const ribAddOns = {
  halfRack: document.getElementById('halfRack'),
  fullRack: document.getElementById('fullRack'),
  originalBBQ: document.getElementById('originalBBQ'),
  spicyBBQ: document.getElementById('spicyBBQ'),
  sweetBBQ: document.getElementById('sweetBBQ'),
  noSauce: document.getElementById('noSauce'),
  ribRequests: document.getElementById('ribRequests')
  }
  const addRibsToCart = document.getElementById('addRibsToCart');

  //Ramen Elements
  const ramenAddOns = {
  chashu: document.getElementById('ramenChashu'),
  chicken: document.getElementById('ramenChicken'),
  tofu: document.getElementById('ramenTofu'),
  egg: document.getElementById('ramenEgg'),
  shiitakeMushroom: document.getElementById('ramenShiitakeMushroom'),
  beanSprouts: document.getElementById('ramenBeanSprouts'),
  seaweed: document.getElementById('ramenSeaweed'),
  bambooShoots: document.getElementById('ramenBambooShoots'),
  greenOnions: document.getElementById('ramenGreenOnions'),
  redGinger: document.getElementById('ramenRedGinger'),
  requests: document.getElementById('ramenRequests')
  };
  
  const ramenSizeOptions = {
    regular: document.getElementById('ramenRegular'),
    large: document.getElementById('ramenLarge')
  }
  const addRamenToCart = document.getElementById('addRamenToCart');

  //Pho Elements
  const phoAddOns = {
    ribeye: document.getElementById('phoRibeye'),
    brisket: document.getElementById('phoBrisket'),
    chicken: document.getElementById('phoChicken'),
    rareSteak: document.getElementById('phoRareSteak'),
    oxtail: document.getElementById('phoOxtail'),
    cilantro: document.getElementById('phoCilantro'),
    jalapenos: document.getElementById('phoJalapenos'),
    beanSprouts: document.getElementById('phoBeanSprouts'),
    basil: document.getElementById('phoBasil'),
    greenOnions: document.getElementById('phoGreenOnions'),
    whiteOnions: document.getElementById('phoWhiteOnions'),
    requests: document.getElementById('phoRequests')
  }
  
  const phoSizeOptions = {
    regular: document.getElementById('phoRegular'),
    large: document.getElementById('phoLarge')
  }
  const addPhoToCart = document.getElementById('addPhoToCart');

  //Tacos Elements
  const tacosAddOns = {
    asada: document.getElementById('tacosAsada'),
    pastor: document.getElementById('tacosPastor'),
    pollo: document.getElementById('tacosPollo'),
    birria: document.getElementById('tacosBirria'),
    chorizo: document.getElementById('tacosChorizo'),
    pescado: document.getElementById('tacosPescado'),
    guacamole: document.getElementById('tacosGuacamole'),
    cilantro: document.getElementById('tacosCilantro'),
    onions: document.getElementById('tacosOnions'),
    salsaVerde: document.getElementById('tacosSalsaVerde'),
    salsaRojo: document.getElementById('tacosSalsaRojo'),
    requests: document.getElementById('tacosRequests')
  }
  const addTacosToCart = document.getElementById('addTacosToCart');

  //Burrito Elements
  const burritoAddOns = {
    asada: document.getElementById('burritoAsada'),
    pastor: document.getElementById('burritoPastor'),
    california: document.getElementById('burritoCalifornia'),
    guacamole: document.getElementById('burritoGuacamole'),
    sourCream: document.getElementById('burritoSourCream'),
    rice: document.getElementById('burritoRice'),
    beans: document.getElementById('burritoBeans'),
    cheese: document.getElementById('burritoCheese'),
    salsaVerde: document.getElementById('burritoSalsaVerde'),
    salsaRojo: document.getElementById('burritoSalsaRojo'),
    requests: document.getElementById('burritoRequests')
  }
  const addBurritoToCart = document.getElementById('addBurritoToCart');

  //Fries Elements
  const friesAddOns = {
    cheese: document.getElementById('friesCheese'),
    baconBits: document.getElementById('friesBaconBits'),
    truffleFries: document.getElementById('friesTruffleFries'),
    sweetPotatoFries: document.getElementById('friesSweetPotatoFries'),
    regularFries: document.getElementById('friesRegularFries'),
    requests: document.getElementById('friesRequests')
  }
  
  const friesSizeOptions = {
    small: document.getElementById('friesSmall'),
    medium: document.getElementById('friesMedium'),
    large: document.getElementById('friesLarge')
  }
  const addFriesToCart = document.getElementById('addFriesToCart');

  //Salad Elements
  const saladAddOns = {
    croutons: document.getElementById('saladCroutons'),
    chicken: document.getElementById('saladChicken'),
    parmesan: document.getElementById('saladParmesan'),
    bleuCheese: document.getElementById('saladBleuCheese'),
    vinaigrette: document.getElementById('saladVinaigrette'),
    dressingOnSide: document.getElementById('saladDressingOnSide'),
    requests: document.getElementById('saladRequests')
  }
  const addSaladToCart = document.getElementById('addSaladToCart');

  //Boba Elements
  const bobaAddOns = {
    taro: document.getElementById('bobaTaro'),
    thaiTea: document.getElementById('bobaThaiTea'),
    matcha: document.getElementById('bobaMatcha'),
    tiger: document.getElementById('bobaTiger'),
    almond: document.getElementById('bobaAlmond'),
    horchata: document.getElementById('bobaHorchata'),
    strawberry: document.getElementById('bobaStrawberry'),
    noBoba: document.getElementById('bobaNoBoba'),
    requests: document.getElementById('bobaRequests')
  }
  
  const bobaSizeOptions = {
    small: document.getElementById('bobaSmall'),
    medium: document.getElementById('bobaMedium'),
    large: document.getElementById('bobaLarge')
  }
  const addBobaToCart = document.getElementById('addBobaToCart');

  //Soda Elements
  const sodaAddOns = {
    coke: document.getElementById('sodaCoke'),
    sprite: document.getElementById('sodaSprite'),
    fanta: document.getElementById('sodaFanta'),
    mugRootBeer: document.getElementById('sodaMugRootBeer'),
    drPepper: document.getElementById('sodaDrPepper'),
    icedTea: document.getElementById('sodaIcedTea'),
    lemonade: document.getElementById('sodaLemonade'),
    orangeJuice: document.getElementById('sodaOrangeJuice'),
    requests: document.getElementById('sodaRequests')
  }
  
  const sodaSizeOptions = {
    small: document.getElementById('sodaSmall'),
    medium: document.getElementById('sodaMedium'),
    large: document.getElementById('sodaLarge')
  }
  const addSodaToCart = document.getElementById('addSodaToCart');

  //Add Ramen To Cart
  addBurgerToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = burgerRequests.value;

    for (const item in burgerAddOns){
      isActive[item] = burgerAddOns[item].classList.contains('active');
    }

    if(isActive['bacon']){
      additionalFees += 1.99;
      console.log('added bacon for additional charge');
    }

    if(isActive['extraPatty']){
      additionalFees += 1.99;
      console.log('added extra patty for additional charge');
    }

    burgerCount++;

    let burgerKey = 'Burger' + burgerCount;

    let updateObj = {}

    updateObj[burgerKey] = {
      burgerAddOns: isActive,
      cost: 6.99,
      addOnCharges: additionalFees,
      requests: request
    };

    database.ref('Orders/' + currentOrderId).update(updateObj);


    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj).then(() => {
        console.log('Update successful');
      })
      .catch((error) => {
        console.error('Update failed: ', error);
      });
    }

  })

  //Add Ribs To Cart
  addRibsToCart.addEventListener('click', (e)=>{
    e.preventDefault(); 

    const isActive = {}

    let ribCost = 0;
    let request = ribRequests.value;

    for (const item in ribAddOns){
      isActive[item] = ribAddOns[item].classList.contains('active');
    }

    if(isActive['halfRack']){
      ribCost = 12.99;
    }else{
      ribCost = 24.99;
    }

    ribCount++;

    let ribKey = "Ribs"+ ribCount;

    let updateObj = {}

    updateObj[ribKey] = {
      ribAddOns: isActive,
      cost: ribCost,
      requests: request
    };

    database.ref('Orders/'+ currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })
  
  //Add Ramen To Cart
  addRamenToCart.addEventListener('click', (e)=>{
    e.preventDefault();

    const isActive = {}

    let ramenAdditionalCost = 0;
    let request = ramenRequests.value;

    for (const item in ramenAddOns){
      isActive[item] = ramenAddOns[item].classList.contains('active');
    }
    for (const item in ramenSizeOptions){
      isActive[item] = ramenSizeOptions[item].classList.contains('active');
    }

    //Ramen Additional Costs
    if(isActive['chashu']){
      ramenAdditionalCost += 1.99;
    }
    if(isActive['chicken']){
      ramenAdditionalCost += 0.99;
    }
    if(isActive['tofu']){
      ramenAdditionalCost += 0.99;
    }
    if(isActive['egg']){
      ramenAdditionalCost += 0.99;
    }
    if(isActive['large']){
      ramenAdditionalCost += 3.99;
    }


    ramenCount++;

    let ramenKey = "Ramen" + ramenCount;

    let updateObj = {}

    updateObj[ramenKey] = {
      ramenAddOns: isActive,
      cost: 8.99,
      addOnCharges: ramenAdditionalCost,
      request: request
    }

    database.ref('Orders/'+ currentOrderId).update(updateObj);
    
    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })

  addPhoToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {}

    let additionalFees = 0;
    let request = phoRequests.value;

    for (const item in phoAddOns){
      isActive[item] = phoAddOns[item].classList.contains('active');
    }
    for (const item in phoSizeOptions){
      isActive[item] = phoSizeOptions[item].classList.contains('active');
    }

    if(isActive['ribeye']){
      additionalFees += 4.99;
    }
    if(isActive['brisket']){
      additionalFees += 3.99;
    }
    if(isActive['chicken']){
      additionalFees += 2.99;
    }
    if(isActive['rareSteak']){
      additionalFees += 2.99;
    }
    if(isActive['oxtail']){
      additionalFees += 1.99;
    }
    if(isActive['large']){
      additionalFees += 3.99;
    }

    phoCount++;

    let phoKey = 'Pho' + phoCount;

    let updateObj = {}

    updateObj[phoKey] = {
      phoAddOns: isActive,
      cost: 9.99,
      addOnCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })

  addTacosToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = tacosRequests.value;

    for (const item in tacosAddOns){
      isActive[item] = tacosAddOns[item].classList.contains('active');
    }
    
    if(isActive['pescado']){
      additionalFees += 2.99;
    }
    if(isActive['guacamole']){
      additionalFees += 1.99;
    }

    tacosCount++;

    let tacosKey = 'Tacos' + tacosCount;

    let updateObj = {}

    updateObj[tacosKey] = {
      tacosAddOns: isActive,
      cost: 5.99,
      addOnCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })

  addBurritoToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {}

    let additionalFees = 0;
    let request = burritoRequests.value;

    for (const item in burritoAddOns){
      isActive[item] = burritoAddOns[item].classList.contains('active');
    }
    
    if(isActive['guacamole']){
      additionalFees += 1.99;
    }

    burritoCount++;

    let burritoKey = 'Burrito' + burritoCount;

    let updateObj = {}

    updateObj[burritoKey] = {
      burritoAddOns: isActive,
      cost: 7.99,
      addOnCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })

  addFriesToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = friesRequests.value;

    for (const item in friesAddOns){
      isActive[item] = friesAddOns[item].classList.contains('active');
    }
    for(const item in friesSizeOptions){
      isActive[item] = friesSizeOptions[item].classList.contains('active');
    }

    if(isActive['cheese']){
      additionalFees += 1.99;
    }
    if(isActive['baconBits']){
      additionalFees += 0.99;
    }
    if(isActive['truffleFries']){
      additionalFees += 2.99;
    }
    if(isActive['sweetPotatoFries']){
      additionalFees += 0.99;
    }
    if(isActive['medium']){
      additionalFees += 1.99;
    }
    if(isActive['large']){
      additionalFees += 2.99
    }

    friesCount++;

    let friesKey = 'Fries' + friesCount;

    let updateObj = {}

    updateObj[friesKey] = {
      friesAddOns: isActive,
      cost: 2.99,
      addOnCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })

  addSaladToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = saladRequests.value;

    for (const item in saladAddOns){
      isActive[item] = saladAddOns[item].classList.contains('active');
    }

    if(isActive['chicken']){
      additionalFees += 1.99;
    }
    saladCount++;

    let saladKey = 'Salad' + saladCount;

    let updateObj = {}

      updateObj[saladKey] = {
        saladAddOns: isActive,
        cost: 6.99,
        addOnCharges: additionalFees,
        requests: request
      }
      
    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }
      
  })

  addBobaToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = bobaRequests.value;

    for (const item in bobaAddOns){
      isActive[item] = bobaAddOns[item].classList.contains('active');
    }
    for (const item in bobaSizeOptions){
      isActive[item] = bobaSizeOptions[item].classList.contains('active');
    }

    if(isActive['medium']){
      additionalFees += 1.99;
    }
    if(isActive['large']){
      additionalFees += 2.99;
    }

    bobaCount++;

    let bobaKey = 'Boba' + bobaCount;

    let updateObj = {}

    updateObj[bobaKey] = {
      bobaAddOns: isActive,
      cost: 4.99,
      addOnCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
      database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
      }

  })

  addSodaToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = sodaRequests.value;

    for (const item in sodaAddOns){
      isActive[item] = sodaAddOns[item].classList.contains('active');
    }
    for (const item in sodaSizeOptions){
      isActive[item] = sodaSizeOptions[item].classList.contains('active');
    }

    if(isActive['medium']){
      additionalFees += 1.00;
    }
    if(isActive['large']){
      additionalFees += 2.00;
    }

    sodaCount++;

    let sodaKey= 'Soda' + sodaCount;

    let updateObj = {};

    updateObj[sodaKey] = {
      sodaAddOns: isActive,
      cost: 1.99,
      addOnCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

    const user = auth.currentUser;
    if(user){
    database.ref('Users/' + user.uid + '/Orders/' + currentOrderId).update(updateObj);
    }

  })