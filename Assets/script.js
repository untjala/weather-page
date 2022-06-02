//Global Variables
var city = $('.searchCity').val();
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
        console.log(data);
    });
}