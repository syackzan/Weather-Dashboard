console.log("hello");
var buttonS = document.getElementById("buttonS");
var inputS = document.getElementById("inputSearch")
var city = document.getElementById("cityS");
var temp = document.getElementById("tempN");
var wind = document.getElementById("windN");
var humidityN = document.getElementById("humidityN");
var uvIndexN = document.getElementById("uvIN");
var fiveDay = document.getElementById("fiveDay");

var placeholder = "Seattle";

var dateN = moment().format("MMMM Do YYYY");
console.log(dateN);


function getApi(inputStorage){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputStorage +",us&units=imperial&APPID=d38851407b874b51cfa24d8ab452271a";
    var fiveRequestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputStorage + ",us&units=imperial&appid=d38851407b874b51cfa24d8ab452271a";
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
            uvIndexN.textContent = "UV Index: " + data.main.pressure;
    });

    fetch(fiveRequestUrl)
    .then(function(response){
        console.log(response);
        
        return response.json()
    })
    .then(function(data){
        console.log(data);
        for (var i = 0; i < data.list.length; i++){
            
            if ((8 % i) === 0){
            var futureBox = document.createElement("div");
            var dateF = document.createElement("p");
            var iconF = document.createElement("p");
            var tempF = document.createElement("p");
            var windF = document.createElement("p");
            var humidityF = document.createElement("p");

            dateF.textContent = data.list[i].dt_txt;
            iconF.textContent = data.list[i].weather[0].icon;
            tempF.textContent = data.list[i].main.temp;
            windF.textContent = data.list[i].wind.speed;
            humidityF.textContent = data.list[i].main.humidity;
            console.log(dateF);

            futureBox.classList.add("borderA");
            futureBox.setAttribute("style", "width: 150px; min-height: 207px; margin: 5px 20px")
            fiveDay.appendChild(futureBox);
            futureBox.appendChild(dateF);
            futureBox.appendChild(iconF);
            futureBox.appendChild(tempF);
            futureBox.appendChild(windF);
            futureBox.appendChild(humidityF);
            }
            
        }
        
});
}

getApi(placeholder);

function saveSearch(){
    var inputStorage = inputS.value;
    console.log(inputStorage);
    getApi(inputStorage);
}

buttonS.addEventListener("click", saveSearch);