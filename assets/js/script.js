document.addEventListener('DOMContentLoaded', function () {
const pizzas = [
  {
    name: "Pizza margarita",
    vegetarian: "Veggie",
    picture: 'assets/img/virgil-abloh.jpg',
    reciepe: ["tomates™", "mozzarella", "basilic"],
    addToCart: "add to cart btn",  // Inserer une icon cart cliquable
    price: [8, "€"],
  },
  {
    name: "Pizza margarita",
    vegetarian: "Veggie",
    picture: 'assets/img/virgil-abloh.jpg',
    reciepe: ["tomates™", "mozzarella", "basilic"],
    addToCart: "add to cart btn",  // Inserer une icon cart cliquable
    price: [8, "€"],
  },
  {
    name: "Pizza margarita",
    vegetarian: "Veggie",
    picture: 'assets/img/virgil-abloh.jpg',
    reciepe: ["tomates™", "mozzarella", "basilic"],
    addToCart: "add to cart btn",  // Inserer une icon cart cliquable
    price: [8, "€"],
  },
  {
    name: "Pizza margarita",
    vegetarian: "Veggie",
    picture: 'assets/img/virgil-abloh.jpg',
    reciepe: ["tomates™", "mozzarella", "basilic"],
    addToCart: "add to cart btn",  // Inserer une icon cart cliquable
    price: [8, "€"],
  },
  {
    name: "Pizza margarita",
    vegetarian: "Veggie",
    picture: 'assets/img/virgil-abloh.jpg',
    reciepe: ["tomates™", "mozzarella", "basilic"],
    addToCart: "add to cart btn",  // Inserer une icon cart cliquable
    price: [8, "€"],
  },
  {
    name: "Pizza margarita",
    vegetarian: "Veggie",
    picture: 'assets/img/virgil-abloh.jpg',
    reciepe: ["tomates™", "mozzarella", "basilic"],
    addToCart: "add to cart btn",  // Inserer une icon cart cliquable
    price: [8, "€"],
  },
]

// Création de chaque MEAL----------------------------------------
const meal = document.createElement('section');
meal.className = 'meal';
document.body.appendChild(meal);

// Parcourir la collection et créer les MEAL html-----------------
pizzas.forEach(pizza => {

  // Créer une <section> pour chaque PIZZA-CARD--------------------
  const pizzaCard = document.createElement('section');
  pizzaCard.classList.add('pizza-card');

  // Créer une <span> pour chaque VEGGIE OR NOT---------------------
  const veggieElement = document.createElement('span');
  veggieElement.classList.add('Veggie-or-not');
  veggieElement.textContent = pizza.vegetarian;
  pizzaCard.appendChild(veggieElement);

   // Créer une <img> pour PICTURE ---------------------------------
   const imgElement = document.createElement('img');
   imgElement.classList.add('photo');
   imgElement.src = designer.picture; //`url(${})`; 

  //  Créer une <p> pour RECIEPE------------------------------------
   const reciepeElement = document.createElement('p');
   reciepeElement.classList.add('reciepe');
   reciepeElement.textContent = pizza.reciepe;
   pizzaCard.appendChild(reciepeElement);

  //  Créer un <button> pour ADD-TO-CARD-----------------------------
  const addToCardElement = document.createElement('button');
  addToCardElement.classList.add('add-to-cart');
  addToCardElement.textContent = pizza.addToCart;
  pizzaCard.appendChild(addToCardElement);

  // Créer un <button> pour PRICE-----------------------------------
  const priceElement = document.createElement('??'); // Quelle balise ?
  priceElement.classList.add('add-to-cart');
  priceElement.textContent = pizza.price;
  pizzaCard.appendChild(priceElement);


meal.appendChild(pizzaCard);
})
})









// Parcourir la collection et créer les cartes HTML----------------
collection.forEach(designer => {
  // Créer une <section> pour chaque designer---------------------
  const designerCard = document.createElement('section');
  designerCard.classList.add('designer-card');


  // Créer une <img> pour IMAGE ---------------------------------
  const imageElement = document.createElement('img');
  imageElement.classList.add('photo');
  imageElement.src = designer.picture; //`url(${designer.picture})`; //----------------------- PROBLEME AVEC CETTE LIGNE ---------------------------
  designerCard.appendChild(imageElement);

  // Créer un  <h2> pour NAME--------------------------------------
  const nameElement = document.createElement('h2');
  nameElement.classList.add('name');
  nameElement.textContent = designer.name;
  designerCard.appendChild(nameElement);

  // Créer un <h4> pour NATIONALITY----------------------------
  const nationalityElement = document.createElement('h4');
  nationalityElement.classList.add('country');
  nationalityElement.textContent = designer.nationality;
  designerCard.appendChild(nationalityElement);

  // Créer un <article> pour SPE-------------------------------
  const speElement = document.createElement('article');
  speElement.classList.add('skills');
  speElement.textContent = designer.spe;
  designerCard.appendChild(speElement);


  // Créer une <ul> <li> pour LINKS-----------------------------
  const linksList = document.createElement('ul');
  linksList.classList.add('allLinks');
  if (Array.isArray(designer.links)) {
    designer.links.forEach(link => {
      const linkItem = document.createElement('li');
      linkItem.classList.add('link');
      const linkAnchor = document.createElement('a');
      linkAnchor.href = link;
      linkAnchor.target = '_blank';
      linkAnchor.textContent = link;
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });
  } else if (typeof designer.links === 'string') {
    const linkItem = document.createElement('li');
    const linkAnchor = document.createElement('a');
    linkAnchor.href = designer.links;
    linkAnchor.target = '_blank';
    linkAnchor.textContent = designer.links;
    linkItem.appendChild(linkAnchor);
    linksList.appendChild(linkItem);
  }
  designerCard.appendChild(linksList);

  // Créer un <p> pour DETAILS------------------------------------
  const detailsElement = document.createElement('p');
  detailsElement.classList.add('about');
  detailsElement.textContent = designer.details;
  designerCard.appendChild(detailsElement);

  // Ajouter la carte (designerCard) au conteneur principal (designersCard)
  designersCard.appendChild(designerCard);
});
