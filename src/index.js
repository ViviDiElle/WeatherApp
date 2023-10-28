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
};*/

//Data e ora

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
  });

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

  
