/*button.addEventListener('click', function(){
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f6e72d8d9402d6a2fe860d4fd4630eab')
    request.onload = function(){
        var data = JSON.parse(this.response)
        
        if (request.status >= 200 && request.status < 400){
            console.log (data)
        } else {
            console.log(err)
        }
    }
    
    request.send()
}) */

var button = document.getElementById('button')
var input = document.getElementById('input')

var request = new XMLHttpRequest()
request.open('Get', 'https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=f6e72d8d9402d6a2fe860d4fd4630eab', true)
request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)
    
    
}

request.send()
