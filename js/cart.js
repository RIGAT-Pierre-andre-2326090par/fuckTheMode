// AFFICHER LE NOMBRE TOTAL DANS LE BADGE
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};
    let totalItems = 0;
    Object.values(cart).forEach(qty => totalItems += qty);

    let badge = document.querySelector('#cart-count');
    if (badge) badge.textContent = totalItems;
}

// AJOUTER UN PRODUIT AU PANIER
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};

    if (cart[productId]) {
        cart[productId] += 1;
    } else {
        cart[productId] = 1;
    }

    localStorage.setItem('productsInCart', JSON.stringify(cart));
    updateCartIcon();
    alert("PRODUIT AJOUTÉ AU PANIER !");
}

// Convertir prix texte ("55.00 $") en nombre (55.00)
function getPrice(priceString) {
    return parseFloat(priceString.replace(' $', '').replace(',', '.'));
}

// VIDE LE PANIER (Après paiement)
function clearCart() {
    localStorage.removeItem('productsInCart');
    updateCartIcon();
}

// Lance la mise à jour de l'icône au chargement
updateCartIcon();

// ... Tes autres fonctions sont au dessus ...

// FONCTION POUR SUPPRIMER UN ARTICLE
function deleteItem(productId) {
    // 1. On récupère le panier
    let cart = JSON.parse(localStorage.getItem('productsInCart'));

    // 2. On supprime la clé correspondante (l'ID du produit)
    delete cart[productId];

    // 3. On sauvegarde le panier modifié
    localStorage.setItem('productsInCart', JSON.stringify(cart));

    // 4. On met à jour le compteur du header
    updateCartIcon();

    // 5. On recharge la page pour voir le changement immédiatement
    location.reload();
}