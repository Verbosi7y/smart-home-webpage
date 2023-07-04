const locations = {
    catonsville: ["39.2721", "-76.7319"], // Default
    new_york: ["40.7143", "-74.006"],
    los_angeles: ["34.0522", "-118.2437"],
    baltimore: ["39.2904", "-76.6122"]
    };

let weather = 404; // default value if error

load();

async function load() {
    const date = new Date();
    var selectElem = document.getElementById("cities");
    var city = selectElem.options[selectElem.selectedIndex].value;

    let url = 'https://api.open-meteo.com/v1/forecast?latitude=' + locations[city][0] + '&longitude=' + locations[city][1] + '&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1';
    
    try {
        weather = await (await fetch(url)).json();
        document.getElementById("weather-num").innerHTML = weather.hourly.temperature_2m[date.getHours()] + " F°";
    } catch(e) {
        document.getElementById("weather-num").innerHTML = "404";
        console.log(weather);
    }
}