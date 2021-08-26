console.log("hello");
var buttonS = document.getElementById("buttonS");
var inputS = document.getElementById("inputSearch")
var city = document.getElementById("cityS");
var temp = document.getElementById("tempN");
var wind = document.getElementById("windN");
var humidityN = document.getElementById("humidityN");
var uvIndexN = document.getElementById("uvIN");

var placeholder = "Seattle";

var dateN = moment().format("MMMM Do YYYY");
console.log(dateN);


function getApi(inputStorage){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputStorage +",us&units=imperial&APPID=d38851407b874b51cfa24d8ab452271a";
    console.log(requestUrl);

    fetch(requestUrl)
        .then(function(response){
            console.log(response);
            
            return response.json()
        })
        .then(function(data){
            console.log(data);
            
            city.textContent = data.name + " (" + dateN + ")";
            temp.textContent = "Temp: " + data.main.temp + "°F";
            wind.textContent = "Wind: " + data.wind.speed + "mph";
            humidityN.textContent = "Humidity: " + data.main.humidity + "%";
            //uvIndexN.textContent = 
    });
}

getApi(placeholder);

function saveSearch(){
    var inputStorage = inputS.value;
    console.log(inputStorage);
    getApi(inputStorage);
}

buttonS.addEventListener("click", saveSearch);