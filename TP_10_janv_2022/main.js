let tab = [];

let cpt = 0;

let resultat = document.querySelector("#resultat");

let nbrCompte = document.querySelector("#nbrCompte");


function ajouter() {
	
	let name = document.querySelector("#name").value;
	let firstName = document.querySelector("#firstName").value;
	let login = document.querySelector("#login").value;
	let mdp = document.querySelector("#mdp").value;
	error.innerHTML = "";
	
	if(name != "" && firstName != "" && login != "" && mdp != ""){
		
		tab.push([name, firstName, login, mdp]);
		
		// console.log(tab);
		
		resultat.innerHTML += `<p> ${tab[cpt][0]} ${tab[cpt][1]} ${tab[cpt][2]} ${tab[cpt][3]} </p>` ;
	
		cpt++;
		
		nbrCompte.innerHTML = `il y a ${cpt} comptes utilisateurs`;
		
		console.log(tab);
	}
	
};



