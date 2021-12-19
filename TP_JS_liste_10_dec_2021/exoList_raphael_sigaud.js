//exo listStyleType
//1ère partie


const userlist = [
	{id: 1, prenom: "Jonathan", age: 40, role: "utilisateur"},
	{id: 2, prenom: "Florence", age: 18, role: "administrateur"},
	{id: 3, prenom: "Morgane", age: 20, role: "utilisateur"},
	{id: 4, prenom: "Rodolphe", age: 30, role: "utilisateur"}
];
	
const div = document.getElementById("usersList");
function boucle() {
for (let i = 0; i < userlist.length ; i++){
	let ol = document.createElement("ol");
			
	if (userlist[i].role == "administrateur"){
		ol.style.color = "red";}
	else {
		ol.style.color = "blue";}
	
	ol.addEventListener("mouseenter", function() {
		ol.style.backgroundColor = "grey";
	});
	
	ol.addEventListener("mouseleave", function() {
		ol.style.backgroundColor = "";
	});
			
	ol.textContent = 
		`ID : ${userlist[i].id}, 
		prenom : ${userlist[i].prenom},
		age : ${userlist[i].age}, 
		role : ${userlist[i].role}`;
		
		
	let suppr = document.createElement("input");
		suppr.setAttribute("type", "button");
		suppr.setAttribute("value", "supprimer");
		
		
	ol.appendChild(suppr);
	
	ol.addEventListener("click", function() {
		
		div.removeChild(ol);
	});
	
    div.appendChild(ol);
	
}

};

boucle();

let creer = document.getElementById("creer");
let prenomAdd = document.getElementById("prenom");
let ageAdd = document.getElementById("age");
let roleAdd = document.getElementById("role");


/* fonction d'ajout */ 

		
function ajoutUti() {
	let olNew = document.createElement("ol");		
		olNew.textContent =
			`ID : ${userlist.length.id}, 
			prenom : ${prenomAdd.value},
			age : ${ageAdd.value}, 
			role : ${roleAdd.value}`;
		div.appendChild(olNew);
		
		if (roleAdd.value == "administrateur"){
		olNew.style.color = "red";}
		else {
		olNew.style.color = "blue";}
	
		olNew.addEventListener("mouseenter", function() {
		olNew.style.backgroundColor = "grey";
		});
	
		olNew.addEventListener("mouseleave", function() {
		olNew.style.backgroundColor = "";	
		
		});	
		
		prenomAdd.value = "";
		ageAdd.value = "";
		roleAdd.value = "";
		
		let suppr = document.createElement("input");
		suppr.setAttribute("type", "button");
		suppr.setAttribute("value", "supprimer");
		
		
		olNew.appendChild(suppr);
		
		olNew.addEventListener("click", function() {
			
		div.removeChild(olNew);
		});
}
	
creer.addEventListener("click", function() {
		ajoutUti();
});
	


/* TRI */


const triId = document.getElementById("triId");

let idClick	= 0;

triId.addEventListener("click", function() {
	
	div.innerHTML = "";
	userlist.sort(function (a,b) {
		return a.id - b.id;
	});
		
	boucle();
	
	idClick++;
	// console.log(idClick);
	if (idClick % 2 == 0) {
		div.innerHTML = "";
		userlist.sort(function (a,b) {
		return b.id - a.id;
		
		});
		boucle();
	}
});


const triPrenom = document.getElementById("triPrenom");

let prenomClick	= 0;

triPrenom.addEventListener("click", function() {
	
	div.innerHTML = "";
	userlist.sort(function (a,b) {
		return a.prenom.localeCompare(b.prenom);
	});
		
	boucle();
	
	prenomClick++;
	// console.log(prenomClick);
	if (prenomClick % 2 == 0) {
		div.innerHTML = "";
		userlist.sort(function (a,b) {
		return b.prenom.localeCompare(a.prenom);
		
		});
		boucle();
	}
});
	
const triAge = document.getElementById("triAge");

let ageClick = 0;

triAge.addEventListener("click", function() {
	
	div.innerHTML = "";
	userlist.sort(function (a,b) {
		return a.age - b.age;
	});
		
	boucle();
	
	ageClick++;
	// console.log(ageClick);
	if (ageClick % 2 == 0) {
		div.innerHTML = "";
		userlist.sort(function (a,b) {
		return b.age - a.age;
		
		});
		boucle();
	}
});


/* RECHERCHE (ne fonctionne pas) */

/*const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input",  function(event){
	let searchValue = searchBar.value;
	console.log(searchValue);
	
	let newUserList = userlist.filter(
		user => user.age == searchValue 
		|| user.prenom.includes(searchValue) 
		|| user.role.includes(searchValue) 
		|| user.id == searchValue
	);
	console.log(newUserList);
	div.innerHTML = "";
	for (let i = 0; i<newUserList.length; i++){
		let userL = newUserList[i];
		createElement(userL.id, userL.prenom, userL.age, userL.role);
	}

});*/


