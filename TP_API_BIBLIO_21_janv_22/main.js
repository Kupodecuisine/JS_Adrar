// je crée une var où je stocke la base de l'url de l'api
let url = "https://data.laregion.fr/api/records/1.0/search/?dataset=acquisitions-de-la-bibliotheque-de-toulouse0&q=&facet=annee";

let display = document.querySelector("#display");
let triAn = document.querySelector("#triAn");
let triExRe = document.querySelector("#triExRe");
let triBu = document.querySelector("#triBu");
let triPoBu = document.querySelector("#triPoBu");

class Object{
	constructor(annee,id,exemplaire,budget,poste){
		this.annee = annee;
		this.id = id;
		this.exemplaire = exemplaire;
		this.budget = budget;
		this.poste = poste;
	}
}

//tableau de base
async function showBibl(){
    const data =  await fetch(url);
    const json =  await data.json();
	let tab = [];
	// sans tri
    for(let i in json.records){
		
		//création de l'objet
        let object = new Object(json.records[i].fields.annee, 
								json.records[i].datasetid, 
								json.records[i].fields.exemplaires_recus,
								json.records[i].fields.montant_du_budget,
								json.records[i].fields.poste_budgetaire);
		tab.push(object);
	
		//affichage de l'objet
		display.innerHTML += 
				`<section> 
					<p> <h3>année : </h3> ${tab[i].annee}</p> 
					<p> <h3>id : </h3> ${tab[i].id}</p> 
					<p> <h3>exemplaires reçus :</h3> ${tab[i].exemplaire}</p> 
					<p> <h3>montant du budget :</h3> ${tab[i].budget}</p> 
					<p> <h3>poste budgétaire :</h3> ${tab[i].poste}</p> 
				</section>`; 
	}
	
	//tri par années
	//========================================================================
	//on récupère le click
	triAn.addEventListener("click", function() {
		//on vide l'html
		display.innerHTML = "";
		//on tri le tableau (créé l.24 et pushé l.34) 
		tab.sort(function compare(a, b) {
			if (a.annee < b.annee)
				return -1;
			if (a.annee > b.annee)
				return 1;
		return 0;
		});
			// une fois le tri effectué, on relance la boucle pour insérer les données dans l'html
			for(let i in json.records){
					
			display.innerHTML += 
					`<section> 
						<p> <h3>année : </h3> ${tab[i].annee}</p> 
						<p> <h3>id : </h3> ${tab[i].id}</p> 
						<p> <h3>exemplaires reçus :</h3> ${tab[i].exemplaire}</p> 
						<p> <h3>montant du budget :</h3> ${tab[i].budget}</p> 
						<p> <h3>poste budgétaire :</h3> ${tab[i].poste}</p> 
					</section>`; 
			}
	});
	
	
	//tri par exemplaires
	//========================================================================
		//on récupère le click
	triExRe.addEventListener("click", function() {
			//on vide l'html
		display.innerHTML = "";
			// on fait une fonction de comparaison, ici c'est pour éviter le tri uniquement par le premier chiffre d'un nombre 
			// exemple : 1,1000,2,3,4,45,5
			// cette fonction permettra de prendre en compte la totalité du nombre
		function compNb(a, b) {
			return a.exemplaire - b.exemplaire;
		}
		//on tri le tableau (créé l.24 et pushé l.34) en utilisant la fonction
		tab.sort(compNb);
		
			// une fois le tri effectué, on relance la boucle pour insérer les données dans l'html
			for(let i in json.records){
					
			display.innerHTML += 
					`<section> 
						<p> <h3>année : </h3> ${tab[i].annee}</p> 
						<p> <h3>id : </h3> ${tab[i].id}</p> 
						<p> <h3>exemplaires reçus :</h3> ${tab[i].exemplaire}</p> 
						<p> <h3>montant du budget :</h3> ${tab[i].budget}</p> 
						<p> <h3>poste budgétaire :</h3> ${tab[i].poste}</p> 
					</section>`; 
			}
	});
	
	//tri par montant du budget (même méthode que pour le tri par exemplaires)
	//========================================================================
	triBu.addEventListener("click", function() {
		
		display.innerHTML = "";
		
		function compNb1(a, b) {
			return a.budget - b.budget;
		}
		
		tab.sort(compNb1);
			for(let i in json.records){
					
			display.innerHTML += 
					`<section> 
						<p> <h3>année : </h3> ${tab[i].annee}</p> 
						<p> <h3>id : </h3> ${tab[i].id}</p> 
						<p> <h3>exemplaires reçus :</h3> ${tab[i].exemplaire}</p> 
						<p> <h3>montant du budget :</h3> ${tab[i].budget}</p> 
						<p> <h3>poste budgétaire :</h3> ${tab[i].poste}</p> 
					</section>`; 
			}
	});
	
	//tri par poste budget (même méthode que pour le tri par exemplaires)
	//========================================================================
	triPoBu.addEventListener("click", function() {
		
		display.innerHTML = "";
		tab.sort(function compare(a, b) {
			if (a.poste < b.poste)
				return -1;
			if (a.poste > b.poste)
				return 1;
		return 0;
		});
			for(let i in json.records){
					
			display.innerHTML += 
					`<section> 
						<p> <h3>année : </h3> ${tab[i].annee}</p> 
						<p> <h3>id : </h3> ${tab[i].id}</p> 
						<p> <h3>exemplaires reçus :</h3> ${tab[i].exemplaire}</p> 
						<p> <h3>montant du budget :</h3> ${tab[i].budget}</p> 
						<p> <h3>poste budgétaire :</h3> ${tab[i].poste}</p>
					</section>`; 
			}
	});
}



showBibl();


