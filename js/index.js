function filterSelection(category) {
    let items = document.querySelectorAll(".card-link");
    if (category == 'all') category = '';
    
    items.forEach(item => {
        let card = item.querySelector(".card");
        item.style.display = "none";
        if (category === '' || card.classList.contains(category)) {
            item.style.display = "block";
        }
    });

    let buttons = document.getElementsByClassName("nav-item");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (buttons[i].textContent.toLowerCase() === category || (category === '' && buttons[i].textContent.toLowerCase() === 'tout')) {
             buttons[i].classList.add("active");
        }
    }
}
// ... Tes autres fonctions (filterSelection) sont au-dessus ...

function searchProducts() {
    // 1. On récupère ce que l'utilisateur tape (en minuscule)
    let input = document.getElementById('search-input').value.toLowerCase();
    
    // 2. On cible toutes les cartes produits (les liens <a>)
    let cards = document.querySelectorAll('.card-link');

    cards.forEach(card => {
        // 3. On extrait l'ID depuis le lien (ex: "produit.html?id=chemise1" -> "chemise1")
        let url = card.getAttribute('href');
        
        // Sécurité : on vérifie que le lien contient bien un ID
        if (url && url.includes('id=')) {
            let id = url.split('id=')[1]; // Récupère "chemise1"

            // 4. On cherche le VRAI TITRE dans data.js
            if (productsDB[id]) {
                let title = productsDB[id].title.toLowerCase();

                // 5. Si le titre contient la recherche, on affiche, sinon on cache
                if (title.includes(input)) {
                    card.style.display = ""; // Affiche (respecte le CSS par défaut)
                } else {
                    card.style.display = "none"; // Cache
                }
            }
        }
    });
}