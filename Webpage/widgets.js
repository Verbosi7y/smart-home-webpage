class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    setCity = (storeCity) => {
        document.getElementById("cityInput").value = storeCity;
        city_name = storeCity;
        loadCityTemp();
    }

    loadCityTemp = () => {
        const date = new Date();
        let weather = 404; // default value if error
        
        var OWM_API_Key = 'e9218fd9904305f49ee367bbf59e44a5';
        city_name = document.getElementById("cityInput").value;
        var locationURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&appid=' + OWM_API_Key;
    
        try{
            let cityInfo = await (fetch(locationURL)).json();
            //console.log(cityInfo.coord.lat.toString() + '_' + cityInfo.coord.lon.toString());
    
            let weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + cityInfo.coord.lat + '&longitude=' + cityInfo.coord.lon + '&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1';
        
            try {
                weather = await (fetch(weatherUrl)).json();
                document.getElementById("weather-num").innerHTML = weather.hourly.temperature_2m[date.getHours()] + " F°";
                save();
            } catch(e) {
                document.getElementById("weather-num").innerHTML = "- F°";
                //console.log(weather);
            }
        } catch(e) {
            document.getElementById("weather-num").innerHTML = "- F°";
            return;
        }
    }
    render() {
        return (
        <div>
            <label htmlFor="cityInput">City:</label>
            <input type="text" id="cityInput" onInput={this.loadCityTemp}></input>
            <div id="weather-num"></div>
        </div>
        );
    }
}

class Fridge extends React.Component {

}

class Thermostat extends React.Component {

}

class PowerButton extends React.Component {

}
