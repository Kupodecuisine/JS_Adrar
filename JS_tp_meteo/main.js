// je crée une var où je stocke la base de l'url de l'api
const url = "https://www.prevision-meteo.ch/services/json/";

// fonction d'affichage des données
function displayData(data){
	
	// récupération de la div display
	let div = document.getElementById("display");
	// on vide le html avant l'insertion des données demandées
	div.innerHTML= "";
	
	//déclaration et insertion du h2
	let newH2 = document.createElement("h2");
	newH2.innerHTML = `Météo pour ${data.city_info.name}, ${data.city_info.country}`; 
	div.appendChild(newH2);

	//déclaration et insertion du h3
	const newH3 = document.createElement("h3");
	newH3.innerHTML = `${data.current_condition.date}, ${data.current_condition.hour}`;
	div.appendChild(newH3);

	//déclaration et insertion du h4
	const newH4 = document.createElement("h4");
	newH4.innerHTML = "Conditions actuelles : ";
	div.appendChild(newH4);

	//déclaration et insertion du img
	const newImg = document.createElement("img");
	newImg.setAttribute("src", data.current_condition.icon_big);
	div.appendChild(newImg);


	//déclaration et insertion du p
	const newP = document.createElement("p");
	newP.innerHTML =`Température: ${data.current_condition.tmp}°C <br> 
					Vent : ${data.current_condition.wnd_spd} Km/h, ${data.current_condition.wnd_dir} <br>
					${data.current_condition.condition}` 
	div.appendChild(newP);

	let days = [data.fcst_day_1, data.fcst_day_2, data.fcst_day_3, data.fcst_day_4];
	console.log(days);
	
	for(let day in days){
		let newH5 = document.createElement("h5");
		newH5.innerHTML = `${days[day].day_long}, ${days[day].date}`; 
		div.appendChild(newH5);
		
		let newImg2 = document.createElement("img");
		newImg2.setAttribute("src", days[day].icon_big);
		div.appendChild(newImg2);
		
		let newP2 = document.createElement("p");
		newP2.innerHTML =`${days[day].condition}, <br> 
						Température max : ${days[day].tmax}°C, température min : ${days[day].tmin}°C`; 
		div.appendChild(newP2);
	
	
	
		for(let i = 0; i <= 23; i++){
			
			let hour = days[day].hourly_data[`${i}H00`];

			const ol = document.createElement("ol");
			
			ol.innerHTML = `${i}H00 : ${hour.CONDITION}`;
			div.appendChild(ol);
		}
	}
	
	
}

// je fais une fonction de requête à l'api
function requestApi(event){
	event.preventDefault();
	// je récupère l'input de la ville
	const city = document.querySelector("form input[name='city']");
	// console.log(city.value);
	// je fais l'envoi de la requête en concaténant la base de l'url avec la valeur de city
	fetch(`${url}${city.value}`)
		//quand j'obtiens une réponse je mets le body en json/
		.then(response => response.json())
		// puis je traite les données reçues
		.then(data => {
			// console.log("success: ", data);
			
			displayData(data);
		})
		//en cas d'erreur je lève une exception et j'affiche l'erreur
		.catch((error) => {
			console.log("Error: ", error);
		});
		
}
// récupération des inputs
const inputs = document.querySelectorAll("input");

// ajout d'un event listener sur le click
inputs[1].addEventListener("click", function(event){
	requestApi(event);
})



