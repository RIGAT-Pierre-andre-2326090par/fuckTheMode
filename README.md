# Fuck the mode

Fuck the mode est une boutique en ligne dédiée à la vente de vêtements, de chaussures ainsi que de bijoux à caractère
déplacé, fais en HTML.

## Table des matières

\- Technologies
\- Installation  
\- Utilisation  
\- Structure du projet

## Technologies

\- HTML, CSS  
\- JavaScript (fichiers principaux : `js/data.js`, `js/index.js`, `js/cart.js`, `js/favorites.js`, `js/theme.js`)  
\- Icônes : Font Awesome

## Installation

1. Cloner le dépôt (branche principale de travail : `beta`) :
   git clone https://github.com/RIGAT-Pierre-andre-2326090par/fuckTheMode.git

2. Ouvrir `index.html` dans un navigateur ou servir le dossier via un serveur local (ex : `live-server`).

## Utilisation

\- Ouvrir `index.html`.  
\- La page affiche une galerie de produits; cliquer sur une carte ouvre `produit.html?id=...`.  
\- Utiliser la recherche (`#search-input`), les filtres de catégorie et les boutons favoris / panier.  
\- Les données produit proviennent de `js/data.js`.

## Structure du projet (extraits importants)

\- `index.html` \- page d'accueil / galerie  
\- `produit.html` \- fiche produit (par id)  
\- `panier.html` \- page panier  
\- `compte.html`, `favoris.html`, `parametres.html`, `contact.html` \- pages complémentaires  
\- `style/` \- fichiers CSS (`index.css`, `theme.css`)  
\- `img/` \- images produit  
\- `js/` \- logique applicative (`data.js`, `index.js`, `cart.js`, `favorites.js`, `theme.js`)