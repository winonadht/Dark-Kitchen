  const pizzas = [
    {
      name: "Pizza Margarita",
      veganOrNot: "Veggie",
      picture: 'assets/img/margarita.jpg',
      reciepe: ["tomates", "mozzarella", "basilic"],
      addToCart: "add to cart",   
      price: "8€",
    },
    {
        name: "Pizza Regina",
        veganOrNot: " ",
        picture: 'assets/img/regina.jpg',
        reciepe: ["tomates", "mozzarella","jambon", "champignon"],
        addToCart: "add to cart",   
        price: "10€",
      },
      {
        name: "Pizza 4 Fromaggi",
        veganOrNot: "Veggie",
        picture: 'assets/img/4fromages.jpg',
        reciepe: ["tomates", "mozzarella", "bel paese","gorgonzola","taleggio"],
        addToCart: "add to cart",   
        price: "13€",
      },
      {
        name: "Pizza Napoli",
        veganOrNot: " ",
        picture: 'assets/img/napoli.jpg',
        reciepe: ["tomates", "mozzarella", "câpre","anchois"],
        addToCart: "add to cart",   
        price: "10€",
      },
      {
        name: "La Calzone",
        veganOrNot: " ",
        picture: 'assets/img/calzone.jpg',
        reciepe: ["tomates", "mozzarella","jambon", "champignon","oeuf","ail"],
        addToCart: "add to cart",   
        price: "12€",
      },
      {
        name: "Pizza Végétarienne",
        veganOrNot: "Veggie",
        picture: 'assets/img/vege.jpg',
        reciepe: ["tomates", "mozzarella", "champignon", "artichauts", "poivrons", "olives", "oignons"],
        addToCart: "add to cart",   
        price: "11€",
      },
      {
        name: "Pizza Ananas",
        veganOrNot: " ",
        picture: 'assets/img/pizza-ananas.png',
        reciepe: ["tomates", "mozzarella", "jambon", "ananas"],
        addToCart: "add to cart",   
        price: "11€",
      },
      {
        name: "Pizza Kiwi",
        veganOrNot: "",
        picture: 'assets/img/kiwi_pizza.webp',
        reciepe: ["tomates", "mozzarella", "jambon", "kiwi"],
        addToCart: "add to cart",   
        price: "11€",
      },
]




const header = document.querySelector('main');
const imgMenu = document.getElementById('.imgMenu');
const cartContainer = document.createElement('div'); // Nouvel élément pour afficher le contenu du panier
cartContainer.classList.add('cart-container');
const panier = document.querySelector('.menuderoulant');


panier.appendChild(cartContainer); // Ajout de l'élément au corps du document

const cart = []; // Le panier

// Fonction pour ajouter une pizza au panier
function addToCart(pizza) {
    cart.push(pizza);
    updateCartDisplay(); // Mettre à jour l'affichage du panier
}

// aouter un click ici en dessous-----------------------------------------

function updateCartDisplay() {
    // Mettre à jour l'affichage du panier dans le conteneur
    cartContainer.innerHTML = '';
    
        const cartDetails = cart.map(pizza => `<div>${pizza.name} - ${pizza.price}</div>`).join('');
        cartContainer.innerHTML = `<h2>Cart</h2>${cartDetails}`;
    }




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

    addToCardElement.addEventListener('click', function () {
      addToCart(pizza); // Appel de la fonction d'ajout au panier
  });

    pizzaCard.appendChild(addToCardElement);

    const priceElement = document.createElement('span');
    priceElement.classList.add('pizza-card__price');
    priceElement.textContent = pizza.price;
    pizzaCard.appendChild(priceElement);

    main.appendChild(pizzaCard);
  });

  imgMenu.addEventListener('click', function () {
    updateCartDisplay(); // Mettre à jour l'affichage du panier lorsque la souris passe sur le bouton
});

imgMenu.addEventListener('click', function () {
    // Masquer le conteneur lorsque la souris quitte le bouton
    cartContainer.style.display = 'none';
});










