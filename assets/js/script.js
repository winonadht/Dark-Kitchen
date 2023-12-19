
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
        veganOrNot: " ",
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
        veganOrNot: " ",
        picture: 'assets/img/napoli.jpg',
        reciepe: ["tomates", "mozzarella", "câpre","anchois"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: "10€",
      },
      {
        name: "Pizza Calzone (pizza fermée)",
        veganOrNot: " ",
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

document.addEventListener('DOMContentLoaded', function () {
  
  const main = document.querySelector('main');

  pizzas.forEach(pizza => {
    // Création de chaque MEAL----------------------------------------
    const pizzaCard = document.createElement('section');
    pizzaCard.classList.add('pizza-card');
    
    const imgElement = document.createElement('img');
    imgElement.classList.add('pizza-card__photo');
    imgElement.src = pizza.picture;
    pizzaCard.appendChild(imgElement);

    const nameElement = document.createElement('h3');
    nameElement.classList.add('pizza-card__name');
    nameElement.textContent = pizza.name;
    pizzaCard.appendChild(nameElement);

    const veggieElement = document.createElement('span');
    veggieElement.classList.add('pizza-card__veganOrNot');
    veggieElement.textContent = pizza.veganOrNot;
    pizzaCard.appendChild(veggieElement);

   

    const reciepeElement = document.createElement('p');
    reciepeElement.classList.add('pizza-card__ingredients');
    reciepeElement.textContent = pizza.reciepe.join(', ');
    pizzaCard.appendChild(reciepeElement);

    const addToCardElement = document.createElement('button');
    addToCardElement.classList.add('pizza-card__add-to-cart');
    addToCardElement.type = pizza.addToCart;
    addToCardElement.textContent = pizza.addToCart;

    pizzaCard.appendChild(addToCardElement);

    const priceElement = document.createElement('span');
    priceElement.classList.add('pizza-card__price');
    priceElement.textContent = pizza.price;
    pizzaCard.appendChild(priceElement);

    main.appendChild(pizzaCard);
  });
});