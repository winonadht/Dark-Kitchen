function toggleDarkMode() {
    var body = document.body;
    var links = document.querySelectorAll('a'); // Sélectionner tous les éléments <a>
    var images = document.querySelectorAll('img'); // Sélectionner tous les éléments <img>

    body.classList.toggle("dark-mode");

    // Changer le style des liens lors du basculement
    links.forEach(function(link) {
        link.classList.toggle("dark-mode-link");
    });

}
