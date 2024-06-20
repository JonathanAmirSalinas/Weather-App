const apiKey = ''; // https://openweathermap.org/api
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?units=metric"


const cityTemperature = document.querySelector('.city-temperature');
const cityName = document.querySelector('.city-name');
const cityHumidity = document.querySelector('.city-humidity-value');
const cityWind = document.querySelector('.city-wind-value');
const weatherForecast = document.querySelector('.weather-forecast-image');
// Input
const cityInput = document.querySelector('.city-input');
const inputButton = document.querySelector('.input-button');

inputButton.addEventListener('click', async () => {
    // If input is empty
    if(cityInput.value == "")
        {
            console.log('Please Enter a City Name.');
        }
        else{
            // Api Response
            const response = await fetch(weatherApi + `&q=${cityInput.value}` + `&appid=${apiKey}`);
            var data = await response.json();
            // Forecast Image
            setWeatherForecastImage(data.weather[0].main);
            // Weather Values
            cityTemperature.innerHTML = data.main.temp + '°c';
            cityName.innerHTML = data.name;
            cityWind.innerHTML = data.wind.speed;
            cityHumidity.innerHTML = data.main.humidity;
        }
});

// Clouds
// Rain
// Clear
// Mist

function setWeatherForecastImage(myWeatherForecast){
    switch (myWeatherForecast) {
        case 'Clouds':
            weatherForecast.src = 'assets/cloudy.png'
            break;
        case 'Rain':
            weatherForecast.src = 'assets/rainy.png'
            break;
        case 'Clear':
            weatherForecast.src = 'assets/clear_weather.png'
            break;
        case 'Mist':
            weatherForecast.src = 'assets/cloudy.png'
            break;
        case 'Snow':
            weatherForecast.src = 'assets/stormy.png'
            break;
        default:
            weatherForecast.src = 'assets/partly_cloudy_day.png'
            break;
    }
}




