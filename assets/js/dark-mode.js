function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");

    // Changer le style des liens lors du basculement
    let links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.classList.toggle("dark-mode-link");
    });

    let pizzacard = document.querySelectorAll('.pizza-card')
    pizzacard.forEach(function(pizza) {
        pizza.classList.toggle("dark-mode-card")
    });
}