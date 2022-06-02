// // $("#currentDay").text(moment().format("dddd, MMMM Do"));
// //Global Variables
// var forecastContainer = document.getElementById('forecast')
// var searchCityEl = document.getElementById('searchCity');
// var searchEl = document.getElementById('searchBtn')
// var currentCityEl = document.getElementById('currentCity')
// var apiKey = '50776dd8bb98783725e832a860968c49'

// //Erases browser defaults for form
// var inputForm = function (event) {
//     event.preventDefault();
// }

// //Search button click event 
// searchEl.click(function (event) {
//     console.log(searchCityEl.value)
//     var city = searchCityEl.value
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=50776dd8bb98783725e832a860968c49`)
//         .then(function (response) {
//             return response.json();
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
var formSubmitHandler = function (event) {
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
var buttonClickHandller = function (event) {
    searchBtnEl.addEventListener('click', function (event) {
        console.log(searchedCityEl.value)
    })
}
// Api Fetch for geo location
var getLocation = function (user) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=50776dd8bb98783725e832a860968c49`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data[0].lat, data[0].lon);
            getWeatherData(data[0].lat, data[0].lon);
        })
        .catch(function (error) {
            alert(error);
        });
};


//OpenWeather API data intergration
var displayWeather = function (response) {
    var cityName = response.cityName;
    var cityNameEl = document.createElement('h1');
    cityNameEl.setAttribute('class', 'cityNameDisplay');
    selectedCityEl.append(cityNameEl)
    //Appends tempature data to current city weather container
    var temp = response.main.temp;
    tempEl.setAttribute('class', 'tempDisplay')
    var tempEl = document.createElement('div');
    tempEl.textContent = 'It is: ' + temp + 'degrees outside.'
    selectedCityEl.append(tempEl)
    //Appends humidity data to current city weather container 
    var humidity = response.main.humidity;
    humidityEl.setAttribute('class', 'humidityDisplay');
    var humidityEl = document.createElement('div');
    humidityEl.textContent = 'Humidity' + humidity + '%'
    selectedCityEl.append(humidityEl)

    //Appends wind speed data to current city weather container
    var windSpeed = response.wind.speed;
    windSpeedEl.setAttribute('class', 'windDisplay');
    var windSpeedEl = document.createElement('div');
    humidityEl.textContent = 'Wind Speed: ' + windSpeed + 'MPH'
    selectedCityEl.append(windEl)
    //Appends UV index to current city weather container 
    var uvi = response.main.uvi;
    uviEl.setAttribute('class', 'uviDisplay');
    var uviEl = document.createElement('div');
    uviEl.textContent = 'UV Index' + uvi
    selectedCityEl.append(uviEl)
}

//Api fetch for temp, wind speed, uv index, and humidity.
// function getWeatherData(lat, lon) {
    // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=50776dd8bb98783725e832a860968c49`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data.current.temp, data.current.wind_speed, data.current.uvi, data.current.humidity,);

//             //Tutor Assistance, logs the daily data in seconds, instead of milliseconds
//             console.log(data.daily[0].dt);
//             var time = data.daily[0].dt;
//             var date = new Date(time * 1000)
//             //End of Tutor Assistance

//             console.log(date);
//             for (var i = 0; i < 5; i++) {
//                 var day = data.daily[i]
//                 console.log(day)
//                 var dailyCard = document.createElement('div');
//                 dailyCard.setAttribute('class', 'five-card')
//                 forecastContainer.append(dailyCard)

//                 //Set and pull temp variables
//                 var temp = data.current.temp;
//                 var wind = data.current.wind_speed
//                 var uvi = data.current.uvi;
//                 var humidity = data.current.humidity

//                 //Create Elements from variables 
//                 var tempEl = document.createElement('p');
//                 var windEl = document.createElement('p');
//                 var uviEl = document.createElement('p');
//                 var humidityEl = document.createElement('p');

//                 //Displays weather content 
//                 temp.textContent = "Temp: " + temp;
//                 tempEl.textContent = "Temp: " + temp;
//                 windEl.textContent = "Wind: " + wind;
//                 uviEl.textContent = "UV Index: " + uvi;
//                 humidityEl.textContent = "Humidity: " + humidity;
//                 // document.body.append(tempEl, windEl, uviEl, humidityEl)
//             }
//         });

//Store searches to local history/recall when clicked
//Event Listners 
// searchBtnEl.onClick = formSubmitHandler;
    // .then(function (data) {
    //     console.log(data[0].lat, data[0].lon);
    //     getWeatherData(data[0].lat, data[0].lon);
    // });


    //Api fetch for temp, wind speed, uv index, and humidity.
    // Api Fetch for geo location
    // function getWeatherData(lat, lon) {
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=50776dd8bb98783725e832a860968c49`)
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             console.log(data.current.temp, data.current.wind_speed, data.current.uvi, data.current.humidity,);

    //             //Tutor Assistance, logs the daily data in seconds, instead of milliseconds
    //             console.log(data.daily[0].dt);
    //             var time = data.daily[0].dt;
    //             var date = new Date(time * 1000)
    //             //End of Tutor Assistance

    //             console.log(date);
    //             for (var i = 0; i < 5; i++) {
    //                 var day = data.daily[i]
    //                 console.log(day)
    //                 var dailyCard = document.createElement('div');
    //                 dailyCard.setAttribute('class', 'five-card')
    //                 forecastContainer.append(dailyCard)

    //                 //Set and pull temp variables
    //                 var temp = data.current.temp;
    //                 var wind = data.current.wind_speed
    //                 var uvi = data.current.uvi;
    //                 var humidity = data.current.humidity

    //                 //Create Elements from variables
    //                 var tempEl = document.createElement('p');
    //                 var windEl = document.createElement('p');
    //                 var uviEl = document.createElement('p');
    //                 var humidityEl = document.createElement('p');

    //                 //Displays weather content
    //                 temp.textContent = "Temp: " + temp;
    //                 tempEl.textContent = "Temp: " + temp;
    //                 windEl.textContent = "Wind: " + wind;
    //                 uviEl.textContent = "UV Index: " + uvi;
    //                 humidityEl.textContent = "Humidity: " + humidity;
    //                 // document.body.append(tempEl, windEl, uviEl, humidityEl)
    //             }
    //         });
    // }
