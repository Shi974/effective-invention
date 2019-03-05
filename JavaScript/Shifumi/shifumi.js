var saisie = prompt('pierre, feuille ou ciseaux ?');

var choix = ["pierre", "feuille", "ciseaux"];
var ordi = choix[Math.floor(Math.random() * 3)]; // aléatoire avec l'ARRAY

/* Aléatoire avec les CONDITIONS (+ long)
var ordi = Math.random();
if (ordi < 0.34) {
    ordi = "pierre";
} else if (ordi <= 0.66) {
    ordi = "feuille";
} else {
    ordi = "ciseaux";
}*/

alert("Vous avez choisi " + saisie + " et l'ordinateur a choisi " + ordi + ".");

var match = function (choix1, choix2) {
    if (choix1 === choix2) {
        return "Egalité!";
    } else {
        if (choix1 === "pierre") {
            if (choix2 === "feuille") {
                return "La feuille gagne!";
            } else {
                return "La pierre gagne!";
            }
        } else {
            if (choix1 === "ciseaux") {
                if (choix2 === "feuille") {
                    return "Les ciseaux gagnent!";
                } else {
                    return "La pierre gagne!";
                }
            } else {
                if (choix1 === "feuille") {
                    if (choix2 === "pierre") {
                        return "La feuille gagne!";
                    } else {
                        return "Les ciseaux gagnent !";
                    }
                }
            }
        }
    }
}

alert(match(saisie, ordi));