$("#currentDay").text(moment().format("dddd, MMMM Do"));
//Global Variables
var searchCityEl = document.getElementById('searchCity');
var searchEl = $('#searchBtn')
var currentCityEl = $('.currentCity')
var fiveDay = document.getElementById('fiveDayForecast')
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
// Api fetch for temp, wind speed, uv index, and humidity.
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=50776dd8bb98783725e832a860968c49`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.daily.temp, data.daily.wind_speed, data.daily.uvi, data.daily.humidity,);

            //Tutor Assistance, logs the daily data in seconds, instead of milliseconds
            console.log(data.daily[0].dt);
            var time = data.daily[0].dt;
            var date = new Date(time * 1000)
            //End of Tutor Assistance

            console.log(date);
            for (var i = 1; i < 6; i++) {
                var day = data.daily[i]
                console.log(day)
                //Set and pull temp variables
                var temp = data.daily.temp;
                var wind = data.daily.wind_speed
                var uvi = data.daily.uvi;
                var humidity = data.daily.humidity

                //Append elements to cards
                var dailyOne = document.createElement('div')
                dailyOne.classList.add('card');
                var tempEl = document.createElement('p');
                tempEl.textContent = "Temp: " + temp;
                dailyOne.appendChild(tempEl);
                var windEl = document.createElement('p');
                windEl.textContent = "Wind: " + wind;
                dailyOne.append(windEl);
                var humidityEl = document.createElement('p');
                humidityEl.textContent = "Humidity: " + humidity;
                dailyOne.append(humidityEl);
                var uviEl = document.createElement ('p');
                uviEl.textContent = "UV Index: " + uvi;
                dailyOne.append(uviEl);
                fiveDay.appendChild(dailyOne);
                //Displays weather content 

            }
        });

    // Store searches to local history/recall when clicked
    // Event Listners 
    // searchBtnEl.onClick = formSubmitHandler;
}