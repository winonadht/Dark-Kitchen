const collection = [
    {
      name: "Pizza Margarita",
      veganOrNot: "Veggie",
      picture: '"assets/img/margarita.jpg"',
      reciepe: ["tomates", "mozzarella", "basilic"],
      addToCart: "add to cart btn",  // Inserer une icon cart cliquable
      price: 8 + "€",
    },
    {
        name: "Pizza Regina",
        veganOrNot: "▬",
        picture: 'assets/img/regina.jpg',
        reciepe: ["tomates", "mozzarella","jambon", "champignon"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: 10 + "€",
      },
      {
        name: "Pizza 4 Fromaggi",
        veganOrNot: "Veggie",
        picture: 'assets/img/4fromages.jpg',
        reciepe: ["tomates", "mozzarella", "bel paese","gorgonzola","taleggio"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: 10 + "€",
      },
      {
        name: "Pizza Napoli",
        veganOrNot: "▬",
        picture: 'assets/img/napoli.jpg',
        reciepe: ["tomates", "mozzarella", "câpre","anchois"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: 10 + "€",
      },
      {
        name: "Pizza Calzone (pizza fermée)",
        veganOrNot: "▬",
        picture: 'assets/img/calzone.jpg',
        reciepe: ["tomates", "mozzarella","jambon", "champignon","oeuf","ail"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: 10 + "€",
      },
      {
        name: "Pizza Végétarienne",
        veganOrNot: "Veggie",
        picture: 'assets/img/vege.jpg',
        reciepe: ["tomates", "mozzarella", "champignon", "artichauts", "poivrons", "olives", "oignons"],
        addToCart: "add to cart btn",  // Inserer une icon cart cliquable
        price: 10 + "€",
      },
]





const meal = document.createElement('section');
meal.className = 'meal';
document.main.appendChild(meal);







// const designersCard = document.createElement('section');
// designersCard.className = 'designers-container';
// document.body.appendChild(designersCard);

// // Parcourir la collection et créer les cartes HTML----------------
// collection.forEach(designer => {
//   // Créer une <section> pour chaque designer---------------------
//   const designerCard = document.createElement('section');
//   designerCard.classList.add('designer-card');

//   // Créer une <img> pour IMAGE ---------------------------------
//   const imageElement = document.createElement('img');
//    imageElement.classList.add('photo');
//    imageElement.src = designer.picture; //`url(${designer.picture})`; //----------------------- PROBLEME AVEC CETTE LIGNE ---------------------------
//   designerCard.appendChild(imageElement);

//   // Créer un  <h2> pour NAME--------------------------------------
//   const nameElement = document.createElement('h2');
//   nameElement.classList.add('name');
//   nameElement.textContent = designer.name;
//   designerCard.appendChild(nameElement);

//   // Créer un <h4> pour NATIONALITY----------------------------
//   const nationalityElement = document.createElement('h4');
//   nationalityElement.classList.add('country');
//   nationalityElement.textContent = designer.nationality;
//   designerCard.appendChild(nationalityElement);

//   // Créer un <article> pour SPE-------------------------------
//   const speElement = document.createElement('article');
//   speElement.classList.add('skills');
//   speElement.textContent = designer.spe;
//   designerCard.appendChild(speElement);