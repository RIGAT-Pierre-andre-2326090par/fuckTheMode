function openNav() { document.getElementById("mySidebar").style.width = "250px"; }
function closeNav() { document.getElementById("mySidebar").style.width = "0"; }

function toggleFavorite(event, productId) {
    event.preventDefault(); 
    event.stopPropagation(); 
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];
    let icon = event.target; 

    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        icon.classList.remove('fa-solid'); 
        icon.classList.add('fa-regular');
        icon.style.color = "white"; 
    } else {
        favorites.push(productId);
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = "red";
    }
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
}

function checkFavoriteStatus(productId, iconElement) {
    let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];
    if (favorites.includes(productId)) {
        iconElement.classList.remove('fa-regular');
        iconElement.classList.add('fa-solid');
        iconElement.style.color = "red";
    }
}