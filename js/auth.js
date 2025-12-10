// Gestion de l'authentification et des utilisateurs avec localStorage
function registerUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem('usersDB')) || [];
    if (users.find(user => user.email === email)) {
        alert("Email déjà utilisé !");
        return false;
    }
    let newUser = {name: name, email: email, password: password, orders: [], profilePic: null};
    users.push(newUser);
    localStorage.setItem('usersDB', JSON.stringify(users));
    alert("Compte créé !");
    return true;
}

// Fonction de connexion
function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem('usersDB')) || [];
    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    } else {
        alert("Erreur identifiants");
        return false;
    }
}

// Fonction de déconnexion
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = "connexion.html";
}

// Ajouter une commande à l'historique
function addOrderToHistory(totalAmount, itemsCount) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    let newOrder = {
        id: '#' + Math.floor(Math.random() * 9000 + 1000),
        date: new Date().toLocaleDateString(),
        total: totalAmount,
        count: itemsCount,
        status: "EN COURS"
    };
    currentUser.orders.unshift(newOrder);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    let users = JSON.parse(localStorage.getItem('usersDB'));
    let userIndex = users.findIndex(u => u.email === currentUser.email);
    users[userIndex] = currentUser;
    localStorage.setItem('usersDB', JSON.stringify(users));
}

// Supprimer une commande de l'historique
function deleteOrder(orderId) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.orders = currentUser.orders.filter(order => order.id !== orderId);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    let users = JSON.parse(localStorage.getItem('usersDB'));
    let userIndex = users.findIndex(u => u.email === currentUser.email);
    users[userIndex] = currentUser;
    localStorage.setItem('usersDB', JSON.stringify(users));
    location.reload();
}

// Sauvegarder la photo de profil
function saveProfilePicture(base64Image) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    currentUser.profilePic = base64Image;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    let users = JSON.parse(localStorage.getItem('usersDB'));
    let userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].profilePic = base64Image;
        localStorage.setItem('usersDB', JSON.stringify(users));
    }
    location.reload();
}

// Changer le mot de passe
function changePassword(oldPass, newPass) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return false;
    if (currentUser.password !== oldPass) {
        alert("Ancien mot de passe incorrect !");
        return false;
    }
    currentUser.password = newPass;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    let users = JSON.parse(localStorage.getItem('usersDB'));
    let userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].password = newPass;
        localStorage.setItem('usersDB', JSON.stringify(users));
    }
    alert("Mot de passe modifié !");
    return true;
}