function toggleDarkMode() {
    let body = document.body;
    let darkMode = body.classList.toggle("dark-mode");

    let header = document.querySelectorAll('header');
    header.forEach(function(head) {
        head.classList.toggle("dark-mode-header", darkMode);
    });

    let pizzacard = document.querySelectorAll('.pizza-card')
    pizzacard.forEach(function(pizza) {
        pizza.classList.toggle("dark-mode-card", darkMode)
    });

    let footer = document.querySelectorAll('footer');
    footer.forEach(function(foot) {
        foot.classList.toggle("dark-mode-foot", darkMode)
    });

    let reseau = document.querySelectorAll('.reseaux');
    reseau.forEach(function(icon){
        icon.classList.toggle("dark-mode-icon", darkMode);
    });
    
    // selection des icones 
    let insta = document.querySelector('.insta');
    let facebook = document.querySelector('.facebook');
    let twitter = document.querySelector('.twitter');

    // changement des icones selon le mode claire et sombre 
    if (darkMode){
        insta.src = "assets/img/instagram-dm.svg";
        facebook.src = "assets/img/facebook-dm.svg";
        twitter.src = "assets/img/x-twitter-dm.svg";
    } else {
        insta.src = "assets/img/instagram.svg";
        facebook.src = "assets/img/facebook.svg";
        twitter.src = "assets/img/x-twitter.svg";
    }
}

