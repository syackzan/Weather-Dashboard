console.log("hello");
var buttonS = document.getElementById("buttonS");
var inputS = document.getElementById("inputSearch")
var city = document.getElementById("cityS");
var temp = document.getElementById("tempN");
var wind = document.getElementById("windN");
var humidityN = document.getElementById("humidityN");
var uvIndexN = document.getElementById("uvIN");
var fiveDay = document.getElementById("fiveDay");
var cityBox = document.getElementById("cityBox");
var counter = 0;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");

var placeholder = "Seattle";

var dateN = moment().format("MMMM Do YYYY");
//console.log(dateN);

//API request for this Days weather & 5 Day lookahead//
function getApi(inputStorage){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputStorage +",us&units=imperial&APPID=d38851407b874b51cfa24d8ab452271a";
    var fiveRequestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputStorage + ",us&units=imperial&appid=d38851407b874b51cfa24d8ab452271a";
    //var uvRequestUrl = "https://api.openweathermap.org/data/2.5/onecall?q=" + inputStorage + ",us&appid=d38851407b874b51cfa24d8ab452271a";
    console.log(requestUrl);

    //Day Forecast//
    fetch(requestUrl)
        .then(function(response){
            //console.log(response);
            
            return response.json()
        })
        .then(function(data){
            //console.log(data);
            
            city.textContent = data.name + " (" + dateN + ")";
            temp.textContent = "Temp: " + data.main.temp + "°F";
            wind.textContent = "Wind: " + data.wind.speed + "mph";
            humidityN.textContent = "Humidity: " + data.main.humidity + "%";
            uvIndexN.textContent = "UV Index: " + (data.main.pressure * .01);
    });

    //Five Day Forecast//
    fetch(fiveRequestUrl)
    .then(function(response){
        //console.log(response);
        
        return response.json()
    })
    .then(function(data){
        //console.log(data);
        fiveDay.innerHTML = "";
        
        for (var i = 0; i < data.list.length; i++){
            
            if ((i % 8) === 0){
            var futureBox = document.createElement("div");
            var dateF = document.createElement("p");
            var iconF = document.createElement("img");
            var tempF = document.createElement("p");
            var windF = document.createElement("p");
            var humidityF = document.createElement("p");

            dateF.textContent = data.list[i].dt_txt;
            dateF.textContent = dateF.textContent.substr(0, 10);
            dateF.textContent = dateF.textContent.substr(5);
            dateF.textContent = dateF.textContent.replace("-", "/");
            dateF.textContent = dateF.textContent + "/2021"
            iconF.src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png"; 
            tempF.textContent = "Temp: " + data.list[i].main.temp + "°F";
            windF.textContent = "Wind: " + data.list[i].wind.speed + "mph";
            humidityF.textContent = "Humi: " + data.list[i].main.humidity + "%";

            futureBox.classList.add("borderA");
            futureBox.classList.add("p-3");
            futureBox.classList.add("bg-info");
            futureBox.classList.add("text-light")
            futureBox.setAttribute("style", "width: 150px; min-height: 207px; margin: 5px 20px")
            dateF.setAttribute("style", "font-weight: bold; font-size: 16px; border-bottom: 2px solid white; text-align: center");
            fiveDay.appendChild(futureBox);
            futureBox.appendChild(dateF);
            futureBox.appendChild(iconF);
            futureBox.appendChild(tempF);
            futureBox.appendChild(windF);
            futureBox.appendChild(humidityF);
            }
            
        }
    });

    //UV Index//
    // fetch(uvRequestUrl)
    //     .then(function(response){
    //         console.log(response);
            
    //         return response.json()
    //     })
    //     .then(function(data){
    //         console.log(data);
            
    //         //uvIndexN.textContent = "UV Index: " + data.main.pressure;
    // });
}

//If statements to loop through Buttons So user can save multiple searches//
function storeSearch(inputStorage){

if (localStorage.getItem("counter") != null){
    counter = localStorage.getItem("counter");  
}

if(counter > 8){
    counter = 0;
}

counter++;
console.log(counter);
localStorage.setItem("counter", counter);

if (counter === 1){
    button1.textContent = inputStorage;
    localStorage.setItem("button1", button1.textContent)
}

if(counter === 2){
    button2.textContent = inputStorage;
    localStorage.setItem("button2", button2.textContent)
}

if(counter === 3){
    button3.textContent = inputStorage;
    localStorage.setItem("button3", button3.textContent)
}

if(counter === 4){
    button4.textContent = inputStorage;
    localStorage.setItem("button4", button4.textContent)
}

if(counter === 5){
    button5.textContent = inputStorage;
    localStorage.setItem("button5", button5.textContent)
}

if(counter === 6){
    button6.textContent = inputStorage;
    localStorage.setItem("button6", button6.textContent)
}

if(counter === 7){
    button7.textContent = inputStorage;
    localStorage.setItem("button7", button7.textContent)
}

if(counter === 8){
    button8.textContent = inputStorage;
    localStorage.setItem("button8", button8.textContent)
}

}

//Get Storage and Set Text Content In Buttons//
function getStorage(){

    if(localStorage.getItem("button1") != null){
        button1.textContent = localStorage.getItem("button1");
    }

    if(localStorage.getItem("button2") != null){
        button2.textContent = localStorage.getItem("button2");
    }

    if(localStorage.getItem("button3") != null){
        button3.textContent = localStorage.getItem("button3");
    }

    if(localStorage.getItem("button4") != null){
        button4.textContent = localStorage.getItem("button4"); 
    }

    if(localStorage.getItem("button5") != null){
        button5.textContent = localStorage.getItem("button5");
    }

    if(localStorage.getItem("button6") != null){
        button6.textContent = localStorage.getItem("button6");
    }

    if(localStorage.getItem("button7") != null){
        button7.textContent = localStorage.getItem("button7");
    }

    if(localStorage.getItem("button8") != null){
        button8.textContent = localStorage.getItem("button8");
    } 
}

function buttonEvent (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

    var buttonResearch = element.textContent;
    getApi(buttonResearch);
    }      
}

getApi(placeholder);
getStorage();

function saveSearch(){
    var inputStorage = inputS.value;
    console.log(inputStorage);
    getApi(inputStorage);
    storeSearch(inputStorage)
}

//Search Button from Search Bar//
buttonS.addEventListener("click", saveSearch);

//Search Button from Saved Buttons//
cityBox.addEventListener("click", function (event){
    buttonEvent (event);
})