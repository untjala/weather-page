//Global Variables
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var searchCityEl = document.getElementById('searchCity');
var searchEl = $('#searchBtn')
var currentCityEl = $('.currentCity')
var apiKey = '50776dd8bb98783725e832a860968c49'

//Erases browser defaults for form
var inputForm = function (event) {
    event.preventDefault();
}
//Search button click event 
searchEl.click(function (event) {
    console.log(searchCityEl.value)
    var city = searchCityEl.value
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=50776dd8bb98783725e832a860968c49`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data[0].lat, data[0].lon);
            getWeatherData(data[0].lat, data[0].lon);
        });
});

// Api Fetch for geo location

//Api fetch for temp, wind speed, uv index, and humidity.
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=50776dd8bb98783725e832a860968c49`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.current.temp, data.current.wind_speed, data.current.uvi, data.current.humidity,);
            //Tutor Assistance
            console.log(data.daily[i].dt);
            var time = data.daily[i].dt;
            var date = new Date(time * 1000)
            //End of Tutor Assistance
            console.log(date);
            for (var i = 1; i < 6; i++) {
                var day = data.daily[0]
                console.log(day)
            //Set and pull temp variables
            var temp = data.current.temp;
            var wind = data.current.wind_speed
            var uvi = data.current.uvi;
            var humidity = data.current.humidity
            var tempEl = document.createElement('p');
            var windEl = document.createElement('p');
            var uviEl = document.createElement('p');
            var humidityEl = document.createElement('p');

            temp.textContent = "Temp: " + temp;
            tempEl.textContent = "Temp: " + temp;
            windEl.textContent = "Wind: " + wind;
            uviEl.textContent = "UV Index: " + uvi;
            humidityEl.textContent = "Humidity: " + humidity;
            document.body.append(tempEl, windEl, uviEl, humidityEl)
            }
        });
}
