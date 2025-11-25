function applyTheme() {
    const theme = localStorage.getItem('siteTheme');
    if (theme === 'light') { document.body.classList.add('light-mode'); }
    else { document.body.classList.remove('light-mode'); }
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        localStorage.setItem('siteTheme', 'dark');
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('siteTheme', 'light');
    }
}
applyTheme();