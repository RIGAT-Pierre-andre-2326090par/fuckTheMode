function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};
    let totalItems = 0;
    Object.values(cart).forEach(qty => totalItems += qty);
    let badge = document.querySelector('#cart-count');
    if (badge) badge.textContent = totalItems;
}

function addToCart(productId, size) {
    if (!size) size = 'Unique';
    let cart = JSON.parse(localStorage.getItem('productsInCart')) || {};
    let uniqueKey = productId + '-' + size;

    if (cart[uniqueKey]) { cart[uniqueKey] += 1; } 
    else { cart[uniqueKey] = 1; }

    localStorage.setItem('productsInCart', JSON.stringify(cart));
    updateCartIcon();
    alert("Ajouté au panier : Taille " + size);
}

function deleteItem(uniqueKey) {
    let cart = JSON.parse(localStorage.getItem('productsInCart'));
    delete cart[uniqueKey];
    localStorage.setItem('productsInCart', JSON.stringify(cart));
    updateCartIcon();
    location.reload();
}

function clearCart() {
    localStorage.removeItem('productsInCart');
    updateCartIcon();
}

function getPrice(priceString) {
    return parseFloat(priceString.replace(' $', '').replace(',', '.'));
}

updateCartIcon();
// GESTION DU CODE PROMO
function applyPromoToStorage(discountPercent, codeName) {
    localStorage.setItem('activePromo', JSON.stringify({
        code: codeName,
        discount: discountPercent
    }));
}

function getActivePromo() {
    return JSON.parse(localStorage.getItem('activePromo'));
}

// Fonction pour masquer/afficher le mot de passe
function togglePasswordVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        iconElement.classList.remove('fa-eye');
        iconElement.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        iconElement.classList.remove('fa-eye-slash');
        iconElement.classList.add('fa-eye');
    }
}