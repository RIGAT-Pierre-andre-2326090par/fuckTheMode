// GESTION DU MENU LATÉRAL
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// GESTION DES FAVORIS
function toggleFavorite(event, productId) {
    event.preventDefault(); // Empêche le clic sur le lien du produit
    event.stopPropagation(); // Arrête la propagation

    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];
    let icon = event.target; // L'icône coeur sur laquelle on a cliqué

    if (favorites.includes(productId)) {
        // Si déjà favori, on retire
        favorites = favorites.filter(id => id !== productId);
        icon.classList.remove('fa-solid'); // Coeur plein
        icon.classList.add('fa-regular');  // Coeur vide
        icon.style.color = "white"; 
    } else {
        // Sinon on ajoute
        favorites.push(productId);
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = "red";
    }

    localStorage.setItem('myFavorites', JSON.stringify(favorites));
}

// Vérifier au chargement si un produit est favori (pour colorier le coeur)
function checkFavoriteStatus(productId, iconElement) {
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];
    if (favorites.includes(productId)) {
        iconElement.classList.remove('fa-regular');
        iconElement.classList.add('fa-solid');
        iconElement.style.color = "red";
    }
}