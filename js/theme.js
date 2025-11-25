// js/theme.js

// 1. Appliquer le thème au chargement de la page
function applyTheme() {
    const theme = localStorage.getItem('siteTheme');
    const body = document.body;

    if (theme === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
}

// 2. Changer le thème (appelé depuis parametres.html)
function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('light-mode')) {
        // On passe en mode sombre
        body.classList.remove('light-mode');
        localStorage.setItem('siteTheme', 'dark');
    } else {
        // On passe en mode clair
        body.classList.add('light-mode');
        localStorage.setItem('siteTheme', 'light');
    }
}

// 3. Lancer l'application du thème immédiatement
applyTheme();