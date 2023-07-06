const locations = {
    catonsville: ["39.2721", "-76.7319"], // Default
    new_york: ["40.7143", "-74.006"],
    los_angeles: ["34.0522", "-118.2437"],
    baltimore: ["39.2904", "-76.6122"],
    chicago: ["41.881832", "-87.623177"],
    houston: ["29.749907", "-95.358421"],
    phoenix: ["33.448376", "-112.074036"],
    philadelphia: ["39.952583", "-75.165222"],
    san_antonio: ["29.424349", "-98.491142"],
    san_diego: ["32.715736", "-117.161087"],
    dallas: ["32.930", "-96.8172"],
    san_jose: ["37.2679", "-121.9064"],
    austin: ["30.266666", "-97.733330"],
    jacksonville: ["30.332184", "-81.655647"],
    fort_worth: ["32.768799", "-97.309341"],
    columbus: ["39.983334", "-82.983330"],
    indianapolis: ["39.791000", "-86.148003"],
    charlotte: ["35.227085", "-80.843124"],
    san_francisco: ["37.773972", "-122.431297"],
    seattle: ["47.608013", "-122.335167"],
    denver: ["39.7420", "-104.9915"],
    oklahoma: ["39.742043", "-104.991531"],
    nashville: ["36.174465", "-86.767960"],
    el_paso: ["31.772543", "-106.460953"],
    washington_dc: ["38.8951", "-77.0364"],
    boston: ["42.361145", "-71.057083"],
    las_vegas: ["36.188110", "-115.176468"]
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