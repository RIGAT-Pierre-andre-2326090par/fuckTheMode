function searchProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let cards = document.querySelectorAll('.card-link');
    cards.forEach(card => {
        let url = card.getAttribute('href');
        if (url && url.includes('id=')) {
            let id = url.split('id=')[1];
            if (productsDB[id]) {
                let title = productsDB[id].title.toLowerCase();
                if (title.includes(input)) { card.style.display = ""; } 
                else { card.style.display = "none"; }
            }
        }
    });
}

function filterSelection(category) {
    let items = document.querySelectorAll(".card-link");
    if (category == 'all') category = '';
    items.forEach(item => {
        let card = item.querySelector(".card");
        item.style.display = "none";
        if (category === '' || card.classList.contains(category)) { item.style.display = "block"; }
    });
    let buttons = document.getElementsByClassName("nav-item");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (buttons[i].textContent.toLowerCase() === category || (category === '' && buttons[i].textContent.toLowerCase() === 'tout')) {
             buttons[i].classList.add("active");
        }
    }
}