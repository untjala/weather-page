//Global Variables
var currentTimeEl = document.getElementById('#currentDay');
var searchBtnEl = document.getElementById('#searchBtn');
var inputNameEl = document.getElementById('#searchCity');
var searchHistoryEl = document.getElementById('#cityHistory');
var selectedCityEl = document.getElementById('#currentCity');
var fiveHeaderEl = document.getElementById('#fiveDayHeader');
var fiveForecastEl = document.getElementById('#fiveDayForecast');
var apiKey = '50776dd8bb98783725e832a860968c49'

//Erases browser defaults for form
var inputForm = function (event) {
    event.preventDefault();
    //Runs function to display data if city is entered, display error message otherwise
    var searchedCity = inputNameEl.value;
    if (searchedCity) {
        getWeatherData(searchedCity);
        selectedCityEl.textContent = '';
        inputNameEl.value = '';
    } else {
        alert('Please enter a valid city name.')
    }
};

//Search button click event 
searchBtnEl.addEventListener('click', function (event) {
    console.log(searchedCityEl.value)
    // Api Fetch for geo location
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=50776dd8bb98783725e832a860968c49`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data[0].lat, data[0].lon);
        getWeatherData(data[0].lat, data[0].lon);
    });
})

//OpenWeather API data intergration
var displayWeather = function (response) {
    var cityName = response.cityName;
    var cityNameEl = document.createElement('h1');
    cityNameEl.setAttribute('class', 'cityNameDisplay');
    selectedCityEl.append(cityNameEl)
//Appends tempature to current city weather container
    var tempEl = document.createElement('div');
    tempEl.textContent = 'It is: ' + 'degrees outside.'
//Appends Humidity to current city weather container 
}

//Api fetch for temp, wind speed, uv index, and humidity.
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=50776dd8bb98783725e832a860968c49`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.current.temp, data.current.wind_speed, data.current.uvi, data.current.humidity,);

            //Tutor Assistance, logs the daily data in seconds, instead of milliseconds
            console.log(data.daily[0].dt);
            var time = data.daily[0].dt;
            var date = new Date(time * 1000)
            //End of Tutor Assistance

            console.log(date);
            for (var i = 0; i < 5; i++) {
                var day = data.daily[i]
                console.log(day)
                var dailyCard = document.createElement('div');
                dailyCard.setAttribute('class', 'five-card')
                forecastContainer.append(dailyCard)

                //Set and pull temp variables
                var temp = data.current.temp;
                var wind = data.current.wind_speed
                var uvi = data.current.uvi;
                var humidity = data.current.humidity

                //Create Elements from variables 
                var tempEl = document.createElement('p');
                var windEl = document.createElement('p');
                var uviEl = document.createElement('p');
                var humidityEl = document.createElement('p');

                //Displays weather content 
                temp.textContent = "Temp: " + temp;
                tempEl.textContent = "Temp: " + temp;
                windEl.textContent = "Wind: " + wind;
                uviEl.textContent = "UV Index: " + uvi;
                humidityEl.textContent = "Humidity: " + humidity;
                // document.body.append(tempEl, windEl, uviEl, humidityEl)
            }
        });
}
//Store searches to local history/recall when clicked
//Event Listners 
searchBtnEl.onClick = inputForm;