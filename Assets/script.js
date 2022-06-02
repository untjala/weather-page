//Global Variables
var searchCity = $('#searchCity');
var searchEl = $('#searchBtn')
var currentCity = $('.currentCity')
// Api Fetch
fetch('http://api.openweathermap.org/geo/1.0/direct?q=Chicago&limit=1&appid=50776dd8bb98783725e832a860968c49')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data[0].lat, data[0].lon);
        getWeatherData(data[0].lat, data[0].lon);
    });

function getWeatherData(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=50776dd8bb98783725e832a860968c49`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.current.temp, data.current.wind_speed, data.current.uvi, data.current.humidity,);
        var temp = data.current.temp;
        var wind_speed = data.current.wind_speed
        var uvi = data.current.uvi;
        var humidity = data.current.humidity
        var tempEl = temp(document.createElement('p'));
        var windEl = document.createElement('p');
        var uviEl = document.createElement('p');
        var humidityEl = document.createElement('p');
        document.body.append(tempEl, windEl, uviEl, humidityEl)
    });
}
//Event listeners
// searchEl.addEventListner('click', function(){
//     var input = searchCity.value;
//     getWeatherData(input);
// })