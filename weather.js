const weahter = document.querySelector("#weather")
const API_KEY = "67f03e334725f705ab02488ce66beb31"

function Onweather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` 
    const weahterIconSet = {
        "01" : "☀️", 
        "02" : "🌤️", 
        "03" : "☁️",
        "04" : "☁️",
        "09" : "🌧️",
        "10" : "🌧️",
        "11" : "🌩️",
        "13" : "❄️",
        "50" : "🌫️",
    }

    fetch(url).then(response=>response.json()).then(json=>{
        const city = json.name;
        const weatherState = json.weather[0].main;
        const weahterIcon = (json.weather[0].icon).substr(0,2);
        const temp = json.main.temp;
        weahter.innerText = `${city} ${weatherState} ${weahterIconSet[weahterIcon]} ${temp}℃`
    })
}

function OnweatherError () {
    alert("I can't find the location");
}

navigator.geolocation.getCurrentPosition(Onweather, OnweatherError);
