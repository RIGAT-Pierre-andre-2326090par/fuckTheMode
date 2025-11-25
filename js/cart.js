// js/cart.js

// AFFICHER LE NOMBRE TOTAL DANS LE BADGE
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};
    let totalItems = 0;
    // On additionne les quantités
    Object.values(cart).forEach(qty => totalItems += qty);

    let badge = document.querySelector('#cart-count');
    if (badge) badge.textContent = totalItems;
}

// AJOUTER UN PRODUIT AU PANIER (AVEC TAILLE)
function addToCart(productId, size) {
    // Si aucune taille n'est donnée, on met une valeur par défaut
    if (!size) size = 'Unique';

    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};

    // On crée une clé unique : ID + Tiret + TAILLE (ex: chemise1-XL)
    let uniqueKey = productId + '-' + size;

    if (cart[uniqueKey]) {
        cart[uniqueKey] += 1;
    } else {
        cart[uniqueKey] = 1;
    }

    localStorage.setItem('productsInCart', JSON.stringify(cart));
    updateCartIcon();
    alert("Ajouté au panier : Taille " + size);
}

// SUPPRIMER UN ARTICLE (ID + Taille spécifique)
function deleteItem(uniqueKey) {
    let cart = JSON.parse(localStorage.getItem('productsInCart'));
    delete cart[uniqueKey];
    localStorage.setItem('productsInCart', JSON.stringify(cart));
    updateCartIcon();
    location.reload();
}

// VIDER LE PANIER
function clearCart() {
    localStorage.removeItem('productsInCart');
    updateCartIcon();
}

// Convertir prix
function getPrice(priceString) {
    return parseFloat(priceString.replace(' $', '').replace(',', '.'));
}

updateCartIcon();