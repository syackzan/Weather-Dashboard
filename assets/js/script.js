console.log("hello");
var button1 = document.getElementById("button1");

function getApi(){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d38851407b874b51cfa24d8ab452271a";
    //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d38851407b874b51cfa24d8ab452271a
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

button1.addEventListener("click", getApi)