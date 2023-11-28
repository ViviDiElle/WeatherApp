/*let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "oslo": {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");

// Converti l'input dell'utente in minuscolo
city = city.toLowerCase();

// Controlla se la città esiste nell'oggetto weather
if (weather.hasOwnProperty(city)) {
    // Se la città esiste, mostra un avviso con le informazioni meteo
    let temp = Math.round(weather[city].temp);
    let humidity = Math.round(weather[city].humidity);
    alert(`It is currently ${temp}°C in ${city} with a humidity of ${humidity}%`);
} else {
    // Se la città non esiste, mostra un avviso con un link a Google Weather
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);
}; */

/*//Data e ora

let today = new Date();

let current = document.querySelector("#current-date");

let date = today.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[today.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[today.getMonth()];

const timeNow = today.toLocaleString();

current.innerHTML = `${day}, ${timeNow}`;

//Scrivo città nel form e cambia in html

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let cityInput = document.getElementById("find-city");
    let cityValue = cityInput.value;

    let cityy = document.getElementById("actual-city");
    cityy.innerHTML = `${cityValue}`;

    // Imposta il valore dell'input su una stringa vuota
    cityInput.value = "";
  })

//Temperature C°-F°

// Seleziona gli elementi
let degrees = document.getElementById("degrees");
let celsius = document.getElementById("celsius-d");
let fahrenheit = document.getElementById("fahrenheit-d");

// Aggiungi un ascoltatore di eventi a celsius
celsius.addEventListener("click", function (event) {
  event.preventDefault();
  // Cambia la temperatura in gradi Celsius
  degrees.innerHTML = "19";
});

// Aggiungi un ascoltatore di eventi a fahrenheit
fahrenheit.addEventListener("click", function (event) {
  event.preventDefault();
  // Cambia la temperatura in gradi Fahrenheit
  degrees.innerHTML = "66";
}); 


// Selezionare il form di ricerca e l'input di testo
let searchForm = document.getElementById("search-form");
let findCity = document.getElementById("find-city");

// Creare una variabile city vuota
let city = "";

// Aggiungere un evento submit al form di ricerca
searchForm.addEventListener("submit", function (event) {
  console.log("Form submitted");
  // Prevenire il comportamento di default del form
  event.preventDefault();
  // Assegnare alla variabile city il valore dell'input di testo
  city = findCity.value;
  // Mostrare il valore della variabile city nella console
  console.log(city);
  // Chiamare la funzione searchCity per cercare la città
  searchCity(city);
});

// Creare una funzione searchCity che accetta il nome della città come parametro
function searchCity(city) {
  // Creare la chiave API e l'URL dell'API di SheCodes
  let apiKey = "3bfodta744aa70431c723fa27b7a2972";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  // Usare axios per fare una richiesta all'API e passare la risposta alla funzione displayCity
 axios.get(apiUrl).then(displayCity).catch(function(error) {
  console.log(error);
});
}

// Creare una funzione displayCity che accetta la risposta dell'API come parametro
function displayCity(response) {
  // Stampa i dati della risposta nella console
  console.log(response.data);

  // Estrarre i dati che ci interessano dalla risposta
  let cityName = response.data.city;
  let cityTemp = Math.round(response.data.temperature.current);

  // Selezionare gli elementi HTML dove vogliamo mostrare il nome della città e la temperatura
  let actualCity = document.getElementById("actual-city");
  let degrees = document.getElementById("degrees");

  // Assegnare il valore dei dati agli elementi HTML
  actualCity.innerHTML = cityName;
  degrees.innerHTML = cityTemp;
}

*/

/*//Data e ora

let today = new Date();

let current = document.querySelector("#current-date");

let date = today.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[today.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[today.getMonth()];

const timeNow = today.toLocaleString();

current.innerHTML = `${day}, ${timeNow}`;
*/

//Scrivo città nel form e cambia in html

// Selezionare il form di ricerca e l'input di testo
let searchForm = document.getElementById("search-form");
let findCity = document.getElementById("find-city");

// Creare una variabile city vuota
let city = "";

// Aggiungere un evento submit al form di ricerca
searchForm.addEventListener("submit", function (event) {
  console.log("Form submitted");
  // Prevenire il comportamento di default del form
  event.preventDefault();
  // Assegnare alla variabile city il valore dell'input di testo
  city = findCity.value;
  // Mostrare il valore della variabile city nella console
  console.log(city);
  // Cambiare il contenuto di actual-city
  let cityy = document.getElementById("actual-city");
  cityy.innerHTML = `${city}`;
  // Imposta il valore dell'input su una stringa vuota
  findCity.value = "";
  // Chiamare la funzione searchCity per cercare la città
  searchCity(city);
});

// Creare una funzione searchCity che accetta il nome della città come parametro
function searchCity(city) {
  // Creare la chiave API e l'URL dell'API di SheCodes
  let apiKey = "3bfodta744aa70431c723fa27b7a2972";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  // Usare axios per fare una richiesta all'API e passare la risposta alla funzione displayCity
 axios.get(apiUrl).then(displayCity).catch(function(error) {
  console.log(error);
});
}

// Creare una funzione displayCity che accetta la risposta dell'API come parametro
function displayCity(response) {
  // Stampa i dati della risposta nella console
  console.log(response.data);

  // Estrarre i dati che ci interessano dalla risposta
  let cityName = response.data.city;
  let cityTemp;
  if (response.data.temperature && response.data.temperature.current) {
    cityTemp = Math.round(response.data.temperature.current);
  } else {
    cityTemp = 'Temperature data not available';
  }
  // Selezionare gli elementi HTML dove vogliamo mostrare il nome della città e la temperatura
  let degrees = document.getElementById("degrees");

  // Assegnare il valore dei dati agli elementi HTML
  degrees.innerHTML = cityTemp;
}
