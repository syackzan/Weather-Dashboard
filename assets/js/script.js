console.log("hello");
var buttonS = document.getElementById("buttonS");
var inputS = document.getElementById("inputSearch")
var city = document.getElementById("cityS");
var temp = document.getElementById("tempN");
var wind = document.getElementById("windN");
var humidityN = document.getElementById("humidityN");
var uvIndexN = document.getElementById("uvIN");


function getApi(){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&APPID=d38851407b874b51cfa24d8ab452271a";
    console.log(requestUrl);

    fetch(requestUrl)
        .then(function(response){
            console.log(response);
            
            return response.json()
        })
        .then(function(data){
            console.log(data);
    });
}

getApi();

function saveSearch(){
    var inputStorage = inputS.value;
    console.log(inputStorage);
}

buttonS.addEventListener("click", saveSearch);