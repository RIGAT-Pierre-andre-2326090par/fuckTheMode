const supabaseUrl = 'https://jmufrhdkzybqpaulnomj.supabase.co';
const supabaseKey = 'sb_publishable_klXk-f2VdhcOhGp-arJBwg_BoXE7i-c';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

function getAllTypes() {
    const {data, error} = supabase.from('types').select('*');

    if (error) {
        console.error('Error fetching types:', error);
        return [];
    }

    return data;
}

function getAllProducts() {
    const {
        data,
        error
    } = supabase.from('stock').select('product(id, Nom, Prix, Description), size(type(id))').order('product(id)', {ascending: true});

    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }

    return data;
}

function getAllProductsById(typeID) {
    const {data, error} = supabase.from('product').select('id, Nom, Prix, size(type)').eq('type', typeID);

    if (error) {
        console.error('Error fetching products by type ID:', error);
        return [];
    }

    return data;
}

function getProductById(productID) {
    const {data, error} = supabase.from('product').select('*').eq('id', productID).single();

    if (error) {
        console.error('Error fetching product by ID:', error);
        return [];
    }

    return data;
}

function getSizesByProductId(productID) {
    const {data, error} = supabase.from('sizes').select('size').eq('product_id', productID);

    if (error) {
        console.error('Error fetching sizes by product ID:', error);
        return [];
    }

    return data;
}

function getUserById(userID) {
    const {data, error} = supabase.from('users').select('email, mot_de_passe').eq('id', userID).single();

    if (error) {
        console.error('Error fetching user by ID:', error);
        return [];
    }

    return data;
}

function getDetailledUserById(userID) {
    const {data, error} = supabase.from('users').select('*').eq('id', userID).single();

    if (error) {
        console.error('Error fetching detailed user by ID:', error);
        return [];
    }

    return data;
}

function getOrdersByUserId(userID) {
    const {data, error} = supabase.from('commande').select('id').eq('user', userID);

    if (error) {
        console.error('Error fetching orders by user ID:', error);
        return [];
    }

    return data;
}

function getOrderDetailsByOrderId(orderID) {
    const {
        data,
        error
    } = supabase.from('commande_content').select('*, stock(product(Nom), color( quantity)').eq('commande', orderID);

    if (error) {
        console.error('Error fetching order details by order ID:', error);
        return [];
    }

    return data;
}

function getStockByProductId(productID) {
    const {data, error} = supabase.from('stock').select('*').eq('product', productID);

    if (error) {
        console.error('Error fetching stock by product ID:', error);
        return [];
    }

    return data;
}

function getColorAndSizeById(productID) {
    const {data, error} = supabase.from('stock').select('color(color), size(size)').eq('product', productID);

    if (error) {
        console.error('Error fetching color and size by product ID:', error);
        return [];
    }

    return data;
}

function getFavoritesByUserId(userID) {
    const {data, error} = supabase.from('favorites').select('product').eq('user', userID);

    if (error) {
        console.error('Error fetching favorites by user ID:', error);
        return [];
    }

    return data;
}

function getFavoriteProductsByUserId(userID) {
    const {data, error} = supabase.from('favorites').select('product(Nom, Prix)').eq('user', userID);

    if (error) {
        console.error('Error fetching favorite products by user ID:', error);
        return [];
    }

    return data;
}

function addUser(email, mot_de_passe) {
    const {data, error} = supabase.from('users').insert([{email: email, mot_de_passe: mot_de_passe}]);

    if (error) {
        console.error('Error adding user:', error);
        return [];
    }

    return data;
}

function addFavorite(userID, productID) {
    const {data, error} = supabase.from('favorites').insert([{user: userID, product: productID}]);

    if (error) {
        console.error('Error adding favorite:', error);
        return [];
    }

    return data;
}

function addColor(colorName, color) {
    const {data, error} = supabase.from('colors').insert([{name: colorName, color: color}]);

    if (error) {
        console.error('Error adding color:', error);
        return [];
    }

    return data;
}

function addType(typeName) {
    const {data, error} = supabase.from('types').insert([{type: typeName}]);

    if (error) {
        console.error('Error adding type:', error);
        return [];
    }

    return data;
}

function addSize(size, type) {
    const {data, error} = supabase.from('sizes').insert([{size: size, type: type}]);

    if (error) {
        console.error('Error adding size:', error);
        return [];
    }

    return data;
}

function addProduct(Nom, Prix, type) {
    const {data, error} = supabase.from('product').insert([{Nom: Nom, Prix: Prix, type: type}]);

    if (error) {
        console.error('Error adding product:', error);
        return [];
    }

    return data;
}

function addStockEmpty(product, color, size) {
    const {data, error} = supabase.from('stock').insert([{product: product, color: color, size: size}]);

    if (error) {
        console.error('Error adding empty stock:', error);
        return [];
    }

    return data;
}

function addStock(product, color, size, quantity) {
    const {data, error} = supabase.from('stock').insert([{
        product: product,
        color: color,
        size: size,
        quantity: quantity
    }]);

    if (error) {
        console.error('Error adding stock:', error);
        return [];
    }

    return data;
}

function addOrder(user) {
    const {data, error} = supabase.from('commande').insert([{user: user}]);

    if (error) {
        console.error('Error adding order:', error);
        return [];
    }

    return data;
}

function addOrderContent(commande, stock, quantity) {
    const {data, error} = supabase.from('commande_content').insert([{
        commande: commande,
        stock: stock,
        quantity: quantity
    }]);

    if (error) {
        console.error('Error adding order content:', error);
        return [];
    }

    return data;
}

function deleteFavorite(userID, productID) {
    const {data, error} = supabase.from('favorites').delete().eq('user', userID).eq('product', productID);

    if (error) {
        console.error('Error deleting favorite:', error);
        return [];
    }

    return data;
}

function updateStockQuantity(productID, colorID, sizeID, newQuantity) {
    const {
        data,
        error
    } = supabase.from('stock').update({quantity: newQuantity}).eq('product', productID).eq('color', colorID).eq('size', sizeID);

    if (error) {
        console.error('Error updating stock quantity:', error);
        return [];
    }

    return data;
}

function updateUserDetails(userID, newEmail, newMotDePasse, newName, newAddress) {
    const {data, error} = supabase.from('users').update({
        email: newEmail,
        mot_de_passe: newMotDePasse,
        name: newName,
        address: newAddress
    }).eq('id', userID);

    if (error) {
        console.error('Error updating user details:', error);
        return [];
    }

    return data;
}

function updateStock(id, productID, colorID, sizeID, newQuantity) {
    const {data, error} = supabase.from('stock').update({
        product: productID,
        color: colorID,
        size: sizeID,
        quantity: newQuantity
    }).eq('id', id);

    if (error) {
        console.error('Error updating stock:', error);
        return [];
    }

    return data;
}

function searchProductsByName(name) {
    const {
        data,
        error
    } = supabase.from('product').select('id').ilike('Nom', `%${name}%`).or('Description::text.ilike.%' + name + '%');

    if (error) {
        console.error('Error searching products by name:', error);
        return [];
    }

    return data;
}