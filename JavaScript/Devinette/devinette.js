/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette ! Vous avez 6 essais!");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
let saisie = Number(prompt("Devinez quel nombre je suis ? Entrez un nombre entre 1 et 100")); // numéro entré par le joueur

let essai = 1;

while (essai <= 6 ) { // continue le jeu tant qu'il reste des essais
        
    console.log("Ceci est votre essai n° : " + essai);
    essai++; // incrémentation du nombre d'essais

    if (saisie < solution) {
        console.log("Vous avez dit " + saisie + " ... Oh non! Je suis plus grand !");
        saisie = Number(prompt("Devinez quel nombre je suis ? Entrez un nombre entre 1 et 100"));
    }

        else if (saisie > solution) {
            console.log("Vous avez dit " + saisie + " ... Ah non ... Je suis plus petit ...");
            saisie = Number(prompt("Devinez quel nombre je suis ? Entrez un nombre entre 1 et 100"));
        }
    
    if (saisie === solution) {
        console.log("C'est ça! Vous avez trouvé ! Je suis bien le numéro " + solution);
        console.log("Vous m'avez trouvé en " + essai + " essai(s) ! :o");
        break;
    }

    if ((essai === 6) && (saisie !== solution)) { // GAME OVER héhé
        console.log("Bien essayé! Ce n'est toujours pas " + saisie + " ...");
        console.log("Vous avez utilisé vos 6 essais ... en vain ... Vous avez perdu ...");
        break;
    }
}