var choix = ["pierre", "feuille", "ciseaux"];
scoreUser = 0;
scoreOrdi = 0;

let essai = 1;
while (essai <= 3) {
    var saisie = prompt('pierre, feuille ou ciseaux ?');
    var ordi = choix[Math.floor(Math.random() * 3)]; // aléatoire avec l'ARRAY

    console.log("Ceci est votre essai n° " + essai + ".");
    console.log("Vous avez choisi " + saisie + " et l'ordinateur a choisi " + ordi + ".");

    var match = function (choix1, choix2) {
        if (choix1 === choix2) {
            return "Egalité!";
        } else {
            if (choix1 === "pierre") {
                if (choix2 === "feuille") {
                    scoreOrdi++;
                    return "La feuille gagne!";
                } else {
                    scoreUser++;
                    return "La pierre gagne!";
                }
            } else {
                if (choix1 === "ciseaux") {
                    if (choix2 === "feuille") {
                        scoreUser++;
                        return "Les ciseaux gagnent!";
                    } else {
                         scoreOrdi++;
                         return "La pierre gagne!";
                    }
                } else {
                    if (choix1 === "feuille") {
                        if (choix2 === "pierre") {
                            scoreUser++;
                            return "La feuille gagne!";
                        } else {
                            scoreOrdi++;
                            return "Les ciseaux gagnent !";
                        }
                    }
                }
            }
        }
    }

    console.log(match(saisie, ordi));
    if (essai === 3) {
        console.log("Fin de la partie! Scores = vous : " + scoreUser + " / ordinateur : " + scoreOrdi + ".");
        if (scoreUser > scoreOrdi) {
            console.log("GG ! Vous avez gagné!");
        } else if (scoreOrdi > scoreUser){
            console.log("Bip boup bip Boup! Vous avez perdu!");
        } else {
            console.log("Egalité ... ou alors vous avez cassé la machine, GG :D");
        }
    }
    essai++;
}