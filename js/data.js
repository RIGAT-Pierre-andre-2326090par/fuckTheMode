const productsDB = {
    // CHEMISES
    "chemise1": { title: "Chemise Péroquet", price: "55.00 $", img: "img/chemise 1.jpg", desc: "Coupe droite, col rigide." },
    "chemise2": { title: "Chemise Méduse", price: "55.00 $", img: "img/chemise 2.jpg", desc: "Élégance sous marine." },
    "chemise3": { title: "Chemise Vintage", price: "55.00 $", img: "img/chemise 3.jpeg", desc: "Confort total." },
    "chemise4": { title: "Chemise Oversize", price: "55.00 $", img: "img/chemise 4.webp", desc: "comme si tu taf dans la restauration." },
    "chemise5": { title: "Chemise Plage", price: "55.00 $", img: "img/chemise 5.webp", desc: "t'as le droit de le mettre hiver." },
    "chemise6": { title: "Chemise mexico", price: "55.00 $", img: "img/chemise 6.webp", desc: "trèèeèeèeèeèeès expréssif." },
    "chemise7": { title: "Chemise motif doré", price: "55.00 $", img: "img/chemise 7.avif", desc: "genre versace mais c'est pas ça." },
    "chemise8": { title: "Chemise noire", price: "55.00 $", img: "img/chemise 8.webp", desc: "Style rétro authentique." },

    // POLOS
    "polo1": { title: "Polo motif", price: "50.00 $", img: "img/polo1.webp", desc: "Coton piqué." },
    "polo2": { title: "Polo émoji", price: "50.00 $", img: "img/polo2.jpg", desc: "stylé et amusant." },
    "polo3": { title: "Polo sport basic", price: "50.00 $", img: "img/polo3.webp", desc: "Style old school." },
    "polo4": { title: "Polo Jojo", price: "50.00 $", img: "img/polo4.jpg", desc: "Fan d'animé hein... fais toi plaizz." },
    "polo5": { title: "Polo F*ck you", price: "50.00 $", img: "img/polo5.jpg", desc: "Discret... nan, pas du tout." },
    "polo6": { title: "Polo Zip", price: "50.00 $", img: "img/polo6.jpg", desc: "Élégant." },
    "polo7": { title: "Polo nir simple", price: "50.00 $", img: "img/polo7.jpg", desc: "Touche vintage." },
    "polo8": { title: "Polo Technique", price: "50.00 $", img: "img/polo8.webp", desc: "Séchage rapide." },

    // T-SHIRTS
    "tshirt1": { title: "T-shirt F*ck you", price: "45.00 $", img: "img/tshirt1.jpg", desc: "Message clair." },
    "tshirt2": { title: "T-shirt motif dos", price: "45.00 $", img: "img/tshirt2.webp", desc: "Les rageux derriere toi recevrons le message." },
    "tshirt3": { title: "T-shirt Graphique", price: "45.00 $", img: "img/tshirt3.webp", desc: "Art urbain." },
    "tshirt4": { title: "T-shirt Oversize", price: "45.00 $", img: "img/tshirt4.avif", desc: "Streetwear." },
    "tshirt5": { title: "T-shirt beat croco", price: "45.00 $", img: "img/tshirt5.webp", desc: "Effet délavé." },
    "tshirt6": { title: "T-shirt stich", price: "45.00 $", img: "img/tshirt6.jpg", desc: "Pratique." },
    "tshirt7": { title: "T-shirt poo", price: "45.00 $", img: "img/tshirt7.jpg", desc: "Coton léger." },
    "tshirt8": { title: "T-shirt émoji", price: "45.00 $", img: "img/tshirt8.jpg", desc: "Affirme-toi." },

    // CHAUSSETTES
    "chaussette1": { title: "Chaussettes zeub", price: "10.00 $", img: "img/chaussette1.jpg", desc: "Confort." },
    "chaussette2": { title: "Chaussettes coq", price: "10.00 $", img: "img/chaussette2.jpg", desc: "Rétro." },
    "chaussette3": { title: "Chaussettes bob l'éponge", price: "10.00 $", img: "img/chaussette3.jpg", desc: "Discrètes... eh beinh nooon." },
    "chaussette4": { title: "Chaussettes Laine", price: "10.00 $", img: "img/chaussette4.jpg", desc: "Petit apero sur patte." },
    "chaussette5": { title: "Chaussettes nu", price: "10.00 $", img: "img/chaussette5.webp", desc: "Fun." },
    "chaussette6": { title: "Chaussettes F*ck you", price: "10.00 $", img: "img/chaussette6.avif", desc: "Classique." },
    "chaussette7": { title: "Chaussettes blaches", price: "10.00 $", img: "img/chaussette7.jpg", desc: "Basique." },
    "chaussette8": { title: "Chaussettes classique", price: "10.00 $", img: "img/chaussette8.jpg", desc: "Standard." },

    // PANTALONS
    "pantalon1": { title: "Jean chaînes", price: "65.00 $", img: "img/pantalon1.avif", desc: "Poches latérales." },
    "pantalon2": { title: "Pantalon foret", price: "65.00 $", img: "img/pantalon2.jpeg", desc: "Stretch confo." },
    "pantalon3": { title: "Pantalon Éléphant", price: "65.00 $", img: "img/pantalon3.jpg", desc: "Passe partout, surtout au zoo." },
    "pantalon4": { title: "Jogging gand V", price: "65.00 $", img: "img/pantalon4.webp", desc: "S'amuser avec style." },
    "pantalon5": { title: "Pantalon à Pinces", price: "65.00 $", img: "img/pantalon5.jpg", desc: "Coupe tailleur." },
    "pantalon6": { title: "Jogging confo", price: "65.00 $", img: "img/pantalon6.webp", desc: "Aspect usé." },
    "pantalon7": { title: "Pantalon Cargo", price: "65.00 $", img: "img/pantalon7.avif", desc: "Texture riche." },
    "pantalon8": { title: "Pantalon F*ck you", price: "65.00 $", img: "img/pantalon8.webp", desc: "C'est la signature bébé." }
};