import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://jmufrhdkzybqpaulnomj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptdWZyaGRrenlicXBhdWxub21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MjcwNTIsImV4cCI6MjA3OTUwMzA1Mn0.V5gkeKtaf8T0nUCCs7TQbBdAbHUGMWEb7C5UNReq7Mw';
export const supabase = createClient(supabaseUrl, supabaseKey);

function getAllTypes() {
  return supabase.from('types').select('*');
}

export { getAllTypes };

function getAllProducts() {
  return supabase.from('products').select('id, Nom, Prix');
}

export { getAllProducts };

function getAllProductsById(typeID) {
  return supabase.from('products').select('id, Nom, Prix, size(type)').eq('type', typeID);
}

export { getAllProductsById };

function getProductById(productID) {
  return supabase.from('products').select('*').eq('id', productID).single();
}

export { getProductById };

function getSizesByProductId(productID) {
  return supabase.from('sizes').select('size').eq('product_id', productID);
}

export { getSizesByProductId };

function getUserById(userID) {
    return supabase.from('users').select('email, mot_de_passe').eq('id', userID).single();
}

export { getUserById };

function getDetailledUserById(userID) {
    return supabase.from('users').select('*').eq('id', userID).single();
}

export { getDetailledUserById };

function getOrdersByUserId(userID) {
    return supabase.from('commande').select('id').eq('user', userID);
}

export { getOrdersByUserId };

function getOrderDetailsByOrderId(orderID) {
    return supabase.from('commande_content').select('*, stock(product(Nom), color( quantity)').eq('commande', orderID);
}

export { getOrderDetailsByOrderId };

function getStockByProductId(productID) {
    return supabase.from('stock').select('*').eq('product', productID);
}

export { getStockByProductId };

function getColorAndSizeById(productID) {
    return supabase.from('stock').select('color(color), size(size)').eq('product', productID);
}

export { getColorAndSizeById };

function getFavoritesByUserId(userID) {
    return supabase.from('favorites').select('product').eq('user', userID);
}

export { getFavoritesByUserId };

function getFavoriteProductsByUserId(userID) {
    return supabase.from('favorites').select('product(Nom, Prix)').eq('user', userID);
}

export { getFavoriteProductsByUserId };

function addUser(email, mot_de_passe) {
    return supabase.from('users').insert([{ email: email, mot_de_passe: mot_de_passe }]);
}

export { addUser };

function addFavorite(userID, productID) {
    return supabase.from('favorites').insert([{ user: userID, product: productID }]);
}

export { addFavorite };

function addColor(colorName, color) {
    return supabase.from('colors').insert([{ name: colorName, color: color }]);
}

export { addColor };

function addType(typeName) {
    return supabase.from('types').insert([{ type: typeName }]);
}

export { addType };

function addSize(size, type) {
    return supabase.from('sizes').insert([{ size: size, type: type }]);
}

export { addSize };

function addProduct(Nom, Prix, type) {
    return supabase.from('products').insert([{ Nom: Nom, Prix: Prix, type: type }]);
}

export { addProduct };

function addStockEmpty(product, color, size) {
    return supabase.from('stock').insert([{ product: product, color: color, size: size}]);
}

export { addStockEmpty };

function addStock(product, color, size, quantity) {
    return supabase.from('stock').insert([{ product: product, color: color, size: size, quantity: quantity}]);
}

export { addStock };

function addOrder(user) {
    return supabase.from('commande').insert([{ user: user }]);
}

export { addOrder };

function addOrderContent(commande, stock, quantity) {
    return supabase.from('commande_content').insert([{ commande: commande, stock: stock, quantity: quantity }]);
}
export { addOrderContent };

function deleteFavorite(userID, productID) {
    return supabase.from('favorites').delete().eq('user', userID).eq('product', productID);
}

export { deleteFavorite };

function updateStockQuantity(productID, colorID, sizeID, newQuantity) {
    return supabase.from('stock').update({ quantity: newQuantity }).eq('product', productID).eq('color', colorID).eq('size', sizeID);
}

export { updateStockQuantity };

function updateUserDetails(userID, newEmail, newMotDePasse, newName, newAddress) {
    return supabase.from('users').update({ email: newEmail, mot_de_passe: newMotDePasse, name: newName, address: newAddress }).eq('id', userID);
}

export { updateUserDetails };

function updateStock(id, productID, colorID, sizeID, newQuantity) {
    return supabase.from('stock').update({ product: productID, color: colorID, size: sizeID, quantity: newQuantity }).eq('id', id);
}

export { updateStock };

function searchProductsByName(name) {
    return supabase.from('products').select('id').ilike('Nom', `%${name}%`).or('Description::text.ilike.%' + name + '%');
}

export {searchProductsByName};