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

  window.onbeforeunload = function(){
    localStorage.removeItem('currentOrderID');

    //Might use it
    //localStorage.removeItem('orderCreationTime');
  }

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
    ramenChashu: document.getElementById('ramenChashu'),
    ramenChicken: document.getElementById('ramenChicken'),
    ramenTofu: document.getElementById('ramenTofu'),
    ramenNoMeat: document.getElementById('ramenNoMeat'),
    ramenEgg: document.getElementById('ramenEgg'),
    ramenShiitakeMushroom: document.getElementById('ramenShiitakeMushroom'),
    ramenBeanSprouts: document.getElementById('ramenBeanSprouts'),
    ramenSeaweed: document.getElementById('ramenSeaweed'),
    ramenBambooShoots: document.getElementById('ramenBambooShoots'),
    ramenGreenOnions: document.getElementById('ramenGreenOnions'),
    ramenRedGinger: document.getElementById('ramenRedGinger'),
    ramenRequests: document.getElementById('ramenRequests')
  }
  
  const ramenSizeOptions = {
    ramenRegular: document.getElementById('ramenRegular'),
    ramenLarge: document.getElementById('ramenLarge')
  }
  const addRamenToCart = document.getElementById('addRamenToCart');

  //Pho Elements
  const phoAddOns = {
    phoRibeye: document.getElementById('phoRibeye'),
    phoBrisket: document.getElementById('phoBrisket'),
    phoChicken: document.getElementById('phoChicken'),
    phoRareSteak: document.getElementById('phoRareSteak'),
    phoOxtail: document.getElementById('phoOxtail'),
    phoCilantro: document.getElementById('phoCilantro'),
    phoJalapenos: document.getElementById('phoJalapenos'),
    phoBeanSprouts: document.getElementById('phoBeanSprouts'),
    phoBasil: document.getElementById('phoBasil'),
    phoGreenOnions: document.getElementById('phoGreenOnions'),
    phoWhiteOnions: document.getElementById('phoWhiteOnions'),
    phoRequests: document.getElementById('phoRequests')
  }
  
  const phoSizeOptions = {
    phoRegular: document.getElementById('phoRegular'),
    phoLarge: document.getElementById('phoLarge')
  }
  const addPhoToCart = document.getElementById('addPhoToCart');

  //Tacos Elements
  const tacosAddOns = {
    tacosAsada: document.getElementById('tacosAsada'),
    tacosPastor: document.getElementById('tacosPastor'),
    tacosPollo: document.getElementById('tacosPollo'),
    tacosBirria: document.getElementById('tacosBirria'),
    tacosChorizo: document.getElementById('tacosChorizo'),
    tacosPescado: document.getElementById('tacosPescado'),
    tacosGuacamole: document.getElementById('tacosGuacamole'),
    tacosCilantro: document.getElementById('tacosCilantro'),
    tacosOnions: document.getElementById('tacosOnions'),
    tacosSalsaVerde: document.getElementById('tacosSalsaVerde'),
    tacosSalsaRojo: document.getElementById('tacosSalsaRojo'),
    tacosRequests: document.getElementById('tacosRequests')
  }
  const addTacosToCart = document.getElementById('addTacosToCart');

  //Burrito Elements
  const burritoAddOns = {
    burritoAsada: document.getElementById('burritoAsada'),
    burritoPastor: document.getElementById('burritoPastor'),
    burritoCalifornia: document.getElementById('burritoCalifornia'),
    burritoGuacamole: document.getElementById('burritoGuacamole'),
    burritoSourCream: document.getElementById('burritoSourCream'),
    burritoRice: document.getElementById('burritoRice'),
    burritoBeans: document.getElementById('burritoBeans'),
    burritoCheese: document.getElementById('burritoCheese'),
    burritoSalsaVerde: document.getElementById('burritoSalsaVerde'),
    burritoSalsaRojo: document.getElementById('burritoSalsaRojo'),
    burritoRequests: document.getElementById('burritoRequests')
  }
  const addBurritoToCart = document.getElementById('addBurritoToCart');

  //Fries Elements
  const friesAddOns = {
    friesCheese: document.getElementById('friesCheese'),
    friesBaconBits: document.getElementById('friesBaconBits'),
    friesTruffleFries: document.getElementById('friesTruffleFries'),
    friesSweetPotatoFries: document.getElementById('friesSweetPotatoFries'),
    friesRegularFries: document.getElementById('friesRegularFries'),
    friesRequests: document.getElementById('friesRequests')
  }
  
  const friesSizeOptions = {
    friesSmall: document.getElementById('friesSmall'),
    friesMedium: document.getElementById('friesMedium'),
    friesLarge: document.getElementById('friesLarge')
  }
  const addFriesToCart = document.getElementById('addFriesToCart');

  //Salad Elements
  const saladAddOns = {
    saladCroutons: document.getElementById('saladCroutons'),
    saladChicken: document.getElementById('saladChicken'),
    saladParmesan: document.getElementById('saladParmesan'),
    saladBleuCheese: document.getElementById('saladBleuCheese'),
    saladVinaigrette: document.getElementById('saladVinaigrette'),
    saladDressingOnSide: document.getElementById('saladDressingOnSide'),
    saladRequests: document.getElementById('saladRequests')
  }
  const addSaladToCart = document.getElementById('addSaladToCart');

  //Boba Elements
  const bobaAddOns = {
    bobaTaro: document.getElementById('bobaTaro'),
    bobaThaiTea: document.getElementById('bobaThaiTea'),
    bobaMatcha: document.getElementById('bobaMatcha'),
    bobaTiger: document.getElementById('bobaTiger'),
    bobaAlmond: document.getElementById('bobaAlmond'),
    bobaHorchata: document.getElementById('bobaHorchata'),
    bobaStrawberry: document.getElementById('bobaStrawberry'),
    bobaNoBoba: document.getElementById('bobaNoBoba'),
    bobaRequests: document.getElementById('bobaRequests')
  }
  
  const bobaSizeOptions = {
    bobaSmall: document.getElementById('bobaSmall'),
    bobaMedium: document.getElementById('bobaMedium'),
    bobaLarge: document.getElementById('bobaLarge')
  }
  const addBobaToCart = document.getElementById('addBobaToCart');

  //Soda Elements
  const sodaAddOns = {
    sodaCoke: document.getElementById('sodaCoke'),
    sodaSprite: document.getElementById('sodaSprite'),
    sodaFanta: document.getElementById('sodaFanta'),
    sodaMugRootBeer: document.getElementById('sodaMugRootBeer'),
    sodaDrPepper: document.getElementById('sodaDrPepper'),
    sodaIcedTea: document.getElementById('sodaIcedTea'),
    sodaLemonade: document.getElementById('sodaLemonade'),
    sodaOrangeJuice: document.getElementById('sodaOrangeJuice'),
    sodaRequests: document.getElementById('sodaRequests')
  }
  
  const sodaSizeOptions = {
    sodaSmall: document.getElementById('sodaSmall'),
    sodaMedium: document.getElementById('sodaMedium'),
    sodaLarge: document.getElementById('sodaLarge')
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

    if(isActive['burgerBacon']){
      additionalFees += 1.99;
      console.log('added bacon for additional charge');
    }

    if(isActive['burgerExtraPatty']){
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
    if(isActive['RamenChashu'] || isActive['ramenChicken']){
      ramenAdditionalCost += 1.99;
    }
    if(isActive['ramenTofu']){
      ramenAdditionalCost += 0.99;
    }
    if(isActive['ramenEgg']){
      ramenAdditionalCost += 0.99;
    }
    if(isActive['ramenLarge']){
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

    if(isActive['phoRibeye']){
      additionalFees += 4.99;
    }
    if(isActive['phoBrisket']){
      additionalFees += 3.99;
    }
    if(isActive['phoChicken']){
      additionalFees += 2.99;
    }
    if(isActive['phoRareSteak']){
      additionalFees += 2.99;
    }
    if(isActive['phoOxtail']){
      additionalFees += 1.99;
    }
    if(isActive['phoLarge']){
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

  })

  addTacosToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = tacosRequests.value;

    for (const item in tacosAddOns){
      isActive[item] = tacosAddOns[item].classList.contains('active');
    }
    
    if(isActive['tacosPescado']){
      additionalFees += 2.99;
    }
    if(isActive['tacosGuacamole']){
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

  })

  addBurritoToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {}

    let additionalFees = 0;
    let request = burritoRequests.value;

    for (const item in burritoAddOns){
      isActive[item] = burritoAddOns[item].classList.contains('active');
    }
    
    if(isActive['burritoGuacamole']){
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

    if(isActive['friesCheese']){
      additionalFees += 1.99;
    }
    if(isActive['friesBaconBits']){
      additionalFees += 0.99;
    }
    if(isActive['friesTruffleFries']){
      additionalFees += 2.99;
    }
    if(isActive['friesSweetPotatoFries']){
      additionalFees += 0.99;
    }
    if(isActive['friesMedium']){
      additionalFees += 1.99;
    }
    if(isActive['friesLarge']){
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
  })

  addSaladToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = saladRequests.value;

    for (const item in saladAddOns){
      isActive[item] = saladAddOns[item].classList.contains('active');
    }

    if(isActive['saladChicken']){
      additionalFees += 1.99;
    }
    saladCount++;

    let saladKey = 'Salad' + saladCount;

    let updateObj = {}

      updateObj[saladKey] = {
        saladAddOns: isActive,
        cost: 6.99,
        addonCharges: additionalFees,
        requests: request
      }
      
    database.ref('Orders/' + currentOrderId).update(updateObj);
      
  })

  addBobaToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = bobaRequests.value;

    for (const item in bobaAddOns){
      isActive[item] = bobaAddOns[item].classList.contains('active');
    }

    if(isActive['bobaMedium']){
      additionalFees += 1.99;
    }
    if(isActive['bobaLarge']){
      additionalFees += 2.99;
    }

    bobaCount++;

    bobaKey = 'Boba' + bobaCount;

    let updateObj = {}

    updateObj[bobaKey] = {
      bobaAddOns: isActive,
      cost: 4.99,
      addonCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

  })

  addSodaToCart.addEventListener('click', (e)=>{
    e.preventDefault();
    const isActive = {};

    let additionalFees = 0;
    let request = sodaRequests.value;

    for (const item in sodaAddOns){
      isActive[item] = sodaAddOns[item].classList.contains('active');
    }

    if(isActive['sodaMedium']){
      additionalFees += 1.00;
    }
    if(isActive['sodaLarge']){
      additionalFees += 2.00;
    }

    sodaCount++;

    sodaKey= 'Soda' + sodaCount;

    let updateObj = {};

    updateObj[sodaKey] = {
      sodaAddOns: isActive,
      cost: 1.99,
      addonCharges: additionalFees,
      requests: request
    }

    database.ref('Orders/' + currentOrderId).update(updateObj);

  })