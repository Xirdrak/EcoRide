//Vous cherchez à réaliser un système vérifiant qu’un ordinateur répond à différents critères.
// Cet ordinateur a plusieurs caractéristiques, voici le script de base :

let marque = "HP";
let modele = "Pavillon";
let stockage = 512;
let ram = 16;
let processeur = "intel core i7";

console.log((marque == "HP" || marque == "Acer") && stockage >= 256 && ram >= 8) ;

//La console doit afficher true si et seulement si l’ordinateur est de marque « HP » ou « Acer »,
//qu’il a un stockage supérieur ou égal à 256 GO et une ram supérieure ou égale à 8 GO.

//
/*code Question 2*/


let prix = stockage + (ram * 20) ;

let fiche = marque + " " + modele + ", " + stockage + " GO de stockage, " + ram + " GO de ram, processeur " + processeur + ", prix : " + prix + " euros";

console.log(fiche);