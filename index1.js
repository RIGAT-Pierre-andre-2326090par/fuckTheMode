function filterSelection(category) {
    let items = document.getElementsByClassName("card");
    
    // Si categorie est 'all', on montre tout, sinon on filtre
    if (category == 'all') category = '';
    
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("hide");
        if (category && !items[i].classList.contains(category)) {
            items[i].classList.add("hide");
        }
    }

    // Gestion du bouton actif (couleur grise)
    let buttons = document.getElementsByClassName("nav-item");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}