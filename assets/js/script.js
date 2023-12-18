document.addEventListener('DOMContentLoaded', function () {
  const pizzas = [
    {
      name: "Pizza Margarita",
      veganOrNot: "Veggie",
      picture: 'assets/img/margarita.jpg',
      reciepe: ["tomates", "mozzarella", "basilic"],
      addToCart: "add to cart btn",  // Inserer une icon cart cliquable
      price: "8€",
    },
    {
        name: "Pizza Regina",
        veganOrNot: "▬",
        picture: 'assets/img/regina.jpg',
        reciepe: ["tomates", "mozzarella","jambon", "champignon"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: "10€",
      },
      {
        name: "Pizza 4 Fromaggi",
        veganOrNot: "Veggie",
        picture: 'assets/img/4fromages.jpg',
        reciepe: ["tomates", "mozzarella", "bel paese","gorgonzola","taleggio"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: "13€",
      },
      {
        name: "Pizza Napoli",
        veganOrNot: "▬",
        picture: 'assets/img/napoli.jpg',
        reciepe: ["tomates", "mozzarella", "câpre","anchois"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: "10€",
      },
      {
        name: "Pizza Calzone (pizza fermée)",
        veganOrNot: "▬",
        picture: 'assets/img/calzone.jpg',
        reciepe: ["tomates", "mozzarella","jambon", "champignon","oeuf","ail"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: "12€",
      },
      {
        name: "Pizza Végétarienne",
        veganOrNot: "Veggie",
        picture: 'assets/img/vege.jpg',
        reciepe: ["tomates", "mozzarella", "champignon", "artichauts", "poivrons", "olives", "oignons"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: "11€",
      },
]



  const main = document.querySelector('main');

  pizzas.forEach(pizza => {
    // Création de chaque MEAL----------------------------------------
    const pizzaCard = document.createElement('section');
    pizzaCard.classList.add('pizza-card');

    const nameElement = document.createElement('h3');
    nameElement.textContent = pizza.name;
    pizzaCard.appendChild(nameElement);

    // const veggieElement = document.createElement('span');
    // veggieElement.textContent = pizza.vegetarian;
    // pizzaCard.appendChild(veggieElement);

    const imgElement = document.createElement('img');
    imgElement.classList.add('photo');
    imgElement.src = pizza.picture;
    pizzaCard.appendChild(imgElement);

    const reciepeElement = document.createElement('p');
    reciepeElement.textContent = "Ingredients: " + pizza.reciepe.join(', ');
    pizzaCard.appendChild(reciepeElement);

    const addToCardElement = document.createElement('button');
    addToCardElement.classList.add('add-to-cart');
    addToCardElement.textContent = pizza.addToCart;
    pizzaCard.appendChild(addToCardElement);

    const priceElement = document.createElement('span');
    priceElement.classList.add('price');
    priceElement.textContent = pizza.price;
    pizzaCard.appendChild(priceElement);

    main.appendChild(pizzaCard);
  });
});










//   // Création de chaque MEAL----------------------------------------
//   const meal = document.createElement('section');
//   meal.className = 'meal';
//   document.body.appendChild(meal);

//   // Parcourir la collection et créer les MEAL html-----------------
//   pizzas.forEach(pizza => {

//     // Créer une <section> pour chaque PIZZA-CARD--------------------
//     const pizzaCard = document.createElement('section');
//     pizzaCard.classList.add('pizza-card');

//     const nameElement = document.createElement('h3');
//     nameElement.classList.add('name');
//     nameElement.textContent = pizza.name;
//     pizzaCard.appendChild(nameElement);


//     // Créer une <span> pour chaque VEGGIE OR NOT---------------------
//     const veggieElement = document.createElement('span');
//     veggieElement.classList.add('Veggie-or-not');
//     veggieElement.textContent = pizza.vegetarian;
//     pizzaCard.appendChild(veggieElement);

//     // Créer une <img> pour PICTURE ---------------------------------
//     const imgElement = document.createElement('img');
//     imgElement.classList.add('photo');
//     imgElement.src = designer.picture; //`url(${})`; 

//     //  Créer une <p> pour RECIEPE------------------------------------
//     const reciepeElement = document.createElement('p');
//     reciepeElement.classList.add('reciepe');
//     reciepeElement.textContent = pizza.reciepe;
//     pizzaCard.appendChild(reciepeElement);

//     //  Créer un <button> pour ADD-TO-CARD-----------------------------
//     const addToCardElement = document.createElement('button');
//     addToCardElement.classList.add('add-to-cart');
//     addToCardElement.textContent = pizza.addToCart;
//     pizzaCard.appendChild(addToCardElement);

//     // Créer un <button> pour PRICE-----------------------------------
//     const priceElement = document.createElement('??'); // Quelle balise ?
//     priceElement.classList.add('add-to-cart');
//     priceElement.textContent = pizza.price;
//     pizzaCard.appendChild(priceElement);


//     meal.appendChild(pizzaCard);
// })
// })

