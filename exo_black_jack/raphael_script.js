/*---------------------------------------------------------
                        Variables
-----------------------------------------------------------*/

//variables -> composants html
let totalFinal;
let cartesJ = document.querySelectorAll("h3");
let scores = document.querySelectorAll("h2");
// console.log(cartesJ, scores);

const inputs = document.querySelectorAll("input");
// console.log(inputs);

//variables compteur
let buttonClick = 0;
let buttonClick2 = 0;
let buttonClickUltime = 0;


/*---------------------------------------------------------
                    jeux de cartes
-----------------------------------------------------------*/
//cartes de coeur
let asCoeur = [11, 'as de coeur'];
let deuxCoeur = [2, '2 de coeur'];
let troisCoeur = [3, '3 de coeur'];
let quatreCoeur = [4, '4 de coeur'];
let cinqCoeur = [5, '5 de coeur'];
let sixCoeur = [6, '6 de coeur'];
let septCoeur = [7, '7 de coeur'];
let huitCoeur = [8, '8 de coeur'];
let neufCoeur = [9, '9 de coeur'];
let dixCoeur = [10, '10 de coeur'];
let valetCoeur = [10, 'valet de coeur'];
let dameCoeur = [10, 'dame de coeur'];
let roiCoeur = [10, 'roi de coeur'];

//cartes de trèfle
let asTrefle = [11, 'as de trèfle'];
let deuxTrefle = [2, '2 de trèfle'];
let troisTrefle = [3, '3 de trèfle'];
let quatreTrefle = [4, '4 de trèfle'];
let cinqTrefle = [5, '5 de trèfle'];
let sixTrefle = [6, '6 de trèfle'];
let septTrefle = [7, '7 de trèfle'];
let huitTrefle = [8, '8 de trèfle'];
let neufTrefle = [9, '9 de trèfle'];
let dixTrefle = [10, '10 de trèfle'];
let valetTrefle = [10, 'valet de trèfle'];
let dameTrefle = [10, 'dame de trèfle'];
let roiTrefle = [10, 'roi de trèfle'];

//cartes de carreau
let asCarreau = [11, 'as de carreau']; 
let deuxCarreau = [2, '2 de carreau'];
let troisCarreau = [3, '3 de carreau'];
let quatreCarreau = [4, '4 de carreau'];
let cinqCarreau = [5, '5 de carreau'];
let sixCarreau = [6, '6 de carreau'];
let septCarreau = [7, '7 de carreau'];
let huitCarreau = [8, '8 de carreau'];
let neufCarreau = [9, '9 de carreau'];
let dixCarreau = [10, '10 de carreau'];
let valetCarreau = [10, 'valet de carreau'];
let dameCarreau = [10, 'dame de carreau'];
let roiCarreau = [10, 'roi de carreau'];

//cartes de pique
let asPique = [11, 'as de pique'];
let deuxPique = [2, '2 de pique'];
let troisPique = [3, '3 de pique'];
let quatrePique = [4, '4 de pique'];
let cinqPique = [5, '5 de pique'];
let sixPique = [6, '6 de pique'];
let septPique = [7, '7 de pique'];
let huitPique = [8, '8 de pique'];
let neufPique = [9, '9 de pique'];
let dixPique = [10, '10 de pique'];
let valetPique = [10, 'valet de pique'];
let damePique = [10, 'dame de pique'];
let roiPique = [10, 'roi de pique'];

//jeux de cartes complet
let jeux = [asCoeur, deuxCoeur, troisCoeur, quatreCoeur, cinqCoeur, sixCoeur, 
septCoeur, huitCoeur, neufCoeur, dixCoeur, valetCoeur, dameCoeur, roiCoeur, 
asTrefle, deuxTrefle, troisTrefle, quatreTrefle, cinqTrefle, sixTrefle, 
septTrefle, huitTrefle, neufTrefle, dixTrefle, valetTrefle, dameTrefle, roiTrefle,  
asCarreau, deuxCarreau, troisCarreau, quatreCarreau, cinqCarreau, sixCarreau, 
septCarreau, huitCarreau, neufCarreau, dixCarreau, valetCarreau, dameCarreau, roiCarreau, 
asPique, deuxPique, troisPique, quatrePique, cinqPique, sixPique, septPique,
huitPique, neufPique, dixPique, valetPique, damePique, roiPique];
/*---------------------------------------------------------
                        Fonctions
-----------------------------------------------------------*/

//fontion qui retourne un nombre entre 0 et 51
function randomNb(){ 
	let random = Math.floor(Math.random() * 52);
	return random;
}

//fonction lancer carte joueur
function playJ () {
	return jeux[randomNb()];
}

// console.log(playJ());

//fonction lancer carte banque
function playB () {
	return jeux[randomNb()];
}
playB();

// console.log(playB());

//fonction reset de l'interface


/*---------------------------------------------------------
                    Ecouteurs d'évènements
-----------------------------------------------------------*/
let scoreB = 0;
inputs[0].addEventListener("click", function(){
	let carteTiree = playB();
	let carteValeur = carteTiree[0];
	
	buttonClick += 1;
	console.log(buttonClick);
	
	if (buttonClick > 1) {
		inputs[0].style.visibility = "hidden";
		inputs[1].style.visibility = "visible";
	}
	
	if (buttonClick = 0) {
		scoreB = carteValeur;
	}
	
	if (buttonClick = 1) {
		scoreB += carteValeur;
	}
	console.log(carteValeur);
	console.log(scoreB);
	scores[1].innerHTML = `Score de la banque : ${scoreB}`;
	return scoreB;
});

let scoreJ = 0;
inputs[1].addEventListener("click", function(){
	buttonClick2 += 1;
	console.log(buttonClick2);
	
	let carteTiree = playJ();
	let carteValeurJ = carteTiree[0];
	cartesJ[0].innerHTML = `Valeur de la carte : ${carteValeurJ}`;
	let carteNom = carteTiree[1];
	cartesJ[1].innerHTML = `Nom de la carte : ${carteNom}`;
	
	if (buttonClick2 > 1) {
		inputs[1].style.visibility = "hidden";
		inputs[2].style.visibility = "visible";
		
	}
			
	if (buttonClick2 = 0) {
		scoreJ = carteValeurJ;
	}
	
	if (buttonClick2 = 1) {
		scoreJ += carteValeurJ;
		
		if(scoreB > scoreJ && scoreB <= 21){
				scores[2].innerHTML = "La banque a gagné!";
			}
			
		else if (scoreJ > scoreB && scoreJ <= 21){
				scores[2].innerHTML = "Vous avez gagné!";
			}
		else { scores[2].innerHTML = "C'est un peu embêtant..."; }
		
	}	
		
	console.log(carteValeurJ);
	console.log(scoreJ);
	
	scores[0].innerHTML = `Score du joueur : ${scoreJ}`;
	
});

inputs[2].addEventListener("click", function(){
	window.location.reload();
	
});


