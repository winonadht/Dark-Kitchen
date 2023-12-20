  function displayPizzas(pizzaType) {
      const main = document.querySelector('main');
      main.innerHTML= '';

      const filteredPizzas = pizzaType === ''
      ? pizzas
      : pizzas.filter(function (pizza){
        return pizza.veganOrNot.trim().toLowerCase() === pizzaType.toLowerCase();
      });

      filteredPizzas.forEach(function (pizza){
     createPizzaCard(pizza);
      })}
      
    
    const veggieButton = document.getElementById('veggieButton');
    veggieButton.addEventListener('click', function () {
      displayPizzas('Veggie');
    }); 

  const nonVeggieButton = document.getElementById('nonVeggieButton');
    nonVeggieButton.addEventListener('click', function () {
      displayPizzas('noVeggie');

      });



      
  for ( let pizza of pizzas){
    createPizzaCard(pizza);


  }