let weather = 404; // default value if error
load();

async function load() {
    const date = new Date();
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=39.2721&longitude=-76.7319&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1';
    try {
        weather = await (await fetch(url)).json();
        document.getElementById("weather-num").innerHTML = weather.hourly.temperature_2m[date.getHours()];
    } catch(e) {
        document.getElementById("weather-num").innerHTML = "404";
        console.log(weather);
    }
}
