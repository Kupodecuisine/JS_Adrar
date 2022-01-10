let tab = [];

let cpt = 0;

let resultat = document.querySelector("#resultat");

let nbrCompte = document.querySelector("#nbrCompte");


function ajouter() {
	
	let inputs = document.querySelectorAll("input");
	let name = inputs[0].value;
	let firstName = inputs[1].value;
	let login = inputs[2].value;
	let mdp = inputs[3].value;
	
	if(name != "" && firstName != "" && login != "" && mdp != ""){
		
		tab.push(name, firstName, login, mdp);
		
		// console.log(tab);
		
		resultat.innerHTML += `<p> ${tab[0]} ${tab[1]} ${tab[2]} ${tab[3]} </p>` ;
	
		cpt++;
		
		nbrCompte.innerHTML = `il y a ${cpt} comptes utilisateurs`;
		
	}
	
	name = "";  
	firstName = "";	
	login = ""; 
	mdp = "";
	tab = [];
	
};



