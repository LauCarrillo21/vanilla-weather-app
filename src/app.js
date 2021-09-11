function displayTemperature (response) {
    console.log (response.data.main.temp);
    let temperatureElement = document.querySelector ("#temperature");
    let cityElement = document.querySelector ("#city");
    let descriptionElement = document.querySelector ("#description");
    let humidityElement = document.querySelector ("#humidity");
    let windElement = document.querySelector ("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =Math.round(response.data.wind.speed);
}

let apiKey = "7c0a7bf7120da0d635ff53ea1528f155";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log (apiUrl);
axios.get(apiUrl).then(displayTemperature);