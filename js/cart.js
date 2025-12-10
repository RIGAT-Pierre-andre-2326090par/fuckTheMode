// Gestion du panier d'achat en utilisant le localStorage
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};
    let totalItems = 0;
    Object.values(cart).forEach(qty => totalItems += qty);
    let badge = document.querySelector('#cart-count');
    if (badge) badge.textContent = totalItems;
}

// Ajouter un produit au panier
function addToCart(productId, size) {
    if (!size) size = 'Unique';
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};
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

// Supprimer un produit du panier
function deleteItem(uniqueKey) {
    let cart = JSON.parse(localStorage.getItem('productsInCart'));
    delete cart[uniqueKey];
    localStorage.setItem('productsInCart', JSON.stringify(cart));
    updateCartIcon();
    location.reload();
}

// Vider le panier
function clearCart() {
    localStorage.removeItem('productsInCart');
    updateCartIcon();
}

// Conversion du format de prix
function getPrice(priceString) {
    return parseFloat(priceString.replace(' $', '').replace(',', '.'));
}

updateCartIcon();