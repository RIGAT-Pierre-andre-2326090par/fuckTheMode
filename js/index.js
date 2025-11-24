// Fonction principale de filtrage
function filterSelection(category) {
    let items = document.getElementsByClassName("card");
    
    // 1. Gérer l'affichage des produits
    for (let i = 0; i < items.length; i++) {
        // Si la catégorie est 'all' ou si l'item a la classe demandée
        if (category == 'all' || items[i].classList.contains(category)) {
            items[i].classList.remove("hide"); // On affiche
        } else {
            items[i].classList.add("hide"); // On cache
        }
    }

    // 2. Gérer le style "Active" du menu (la pilule grise)
    let buttons = document.getElementsByClassName("nav-item");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active"); // On enlève 'active' partout
        // Note : Dans un vrai projet, il faut cibler le bouton cliqué
        // Ici on fait simple, on met un event listener sur le clic :
        if(buttons[i].textContent.toLowerCase() === category.toLowerCase()) {
             buttons[i].classList.add("active");
        }
    }
}

// Pour gérer le bouton actif visuellement au clic (plus précis)
var btnContainer = document.querySelector(".category-nav");
var btns = btnContainer.getElementsByClassName("nav-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}