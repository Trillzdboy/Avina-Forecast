var country = document.getElementById('country');
var sys = document.getElementById('sys');
var temperature = document.getElementById('temperature');
var pressure = document.getElementById('pressure');
var speed = document.getElementById('speed');
var humidity = document.getElementById('humidity');
var direction = document.getElementById('direction');

var button = document.getElementById('clicked');
var input = document.getElementById('input');

function k2c(k) {
    return Math.round(k - 273.15);
}

function degreesToDirection(degrees) {
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = [ "N", "NNE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    for (i in angles) {
        
        if( degrees >= low && degrees < high) {
            return angles[i];
        }
        
        low = (low + range) % 360;
        high = (high + range) % 360;
    }
    return "N";
}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
} else {
    alert('Cannot discover location automatically. Use the search option!')
}

function showPosition(position) {
    updateByGeo(position.coords.latitude, position.coords.longitude)
}

function updateByGeo(lat, lon) {
    var request = new XMLHttpRequest()
    request.open('Get', 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=f6e72d8d9402d6a2fe860d4fd4630eab', true)
    request.onload = function () {
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status <400) {
        console.log(data);
        country.innerHTML = data.name;
        sys.innerHTML = data.sys.country;
        temperature.innerHTML = k2c(data.main.temp);
        pressure.innerHTML = data.main.pressure;
        speed.innerHTML = data.wind.speed;
        humidity.innerHTML = data.main.humidity;
        direction.innerHTML = degreesToDirection(data.wind.deg);
        
    } else {
        console.log('error');
    }
    
    
}

request.send();
} 




















/*var request = new XMLHttpRequest()
    request.open('Get', 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f6e72d8d9402d6a2fe860d4fd4630eab', true)
    request.onload = function () {
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status <400) {
        console.log(data);
        country.innerHTML = data.name;
        sys.innerHTML = data.sys.country;
        temperature.innerHTML = k2c(data.main.temp);
        pressure.innerHTML = data.main.pressure;
        speed.innerHTML = data.wind.speed;
        humidity.innerHTML = data.main.humidity;
        direction.innerHTML = degreesToDirection(data.wind.deg);
        
    } else {
        console.log('error');
    }
    
    
}

request.send(); */


/*button.addEventListener("click", weather());

function weather() {
    var request = new XMLHttpRequest()
    request.open('Get', 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f6e72d8d9402d6a2fe860d4fd4630eab', true)
    request.onload = function () {
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status <400) {
        console.log(data);
        country.innerHTML = data.name;
        sys.innerHTML = data.sys.country;
        temperature.innerHTML = k2c(data.main.temp);
        pressure.innerHTML = data.main.pressure;
        speed.innerHTML = data.wind.speed;
        humidity.innerHTML = data.main.humidity;
        direction.innerHTML = degreesToDirection(data.wind.deg);
        
    } else {
        console.log('error');
    }
    
    
}

request.send();
} */




















// ServiceWorker Registration
if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js')
            .then(registration => {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Custom Download Button Prompt

