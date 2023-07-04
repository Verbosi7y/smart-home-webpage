let weather = 101;
load();
async function load() {
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m';
    try {
        weather = await (await fetch(url)).json();
        document.getElementById("weather-num").innerHTML = weather;
    } catch(e) {
        weather = 100;
        document.getElementById("weather-num").innerHTML = weather.toString();
    }
    console.log(weather);
}

