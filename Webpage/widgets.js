class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    setCity = (storeCity) => {
        document.getElementById("cityInput").value = storeCity;
<<<<<<< Updated upstream
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
=======
        this.setState({ city_name: storeCity }, () => this.loadCityTemp());
    }

    loadCityTemp() {
        const date = new Date();
        const OWM_API_Key = 'e9218fd9904305f49ee367bbf59e44a5';
        const city_name = document.getElementById("cityInput").value;
        const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${OWM_API_Key}`;
    
        fetch(locationURL)
        .then(response => response.json())
        .then(cityInfo => {
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.coord.lat}&longitude=${cityInfo.coord.lon}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1`;
            fetch(weatherUrl)
            .then(response => response.json())
            .then(weather => {
                document.getElementById("weather-num").innerHTML = weather.hourly.temperature_2m[date.getHours()] + " F°";
                //this.save();
            })
            .catch(error => {
                document.getElementById("weather-num").innerHTML = "- F°";
                console.log(error);
            });
        })
        .catch(error => {
            document.getElementById("weather-num").innerHTML = "- F°";
            console.log(error);
        });
    }

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

}

class Thermostat extends React.Component {

}

class PowerButton extends React.Component {

}
=======
    constructor(props){
        super(props);
    }
    
    setFridge = (temp) => {
        fridge = temp;
        document.getElementById("fridge-num").innerHTML = fridge + " F°";
    }
    
    setFreezer = (temp) => {
        freezer = temp;
        document.getElementById("freezer-num").innerHTML = freezer + " F°";
    }
    
    increaseFridge(){ 
        var fri_temp = document.getElementById("fridge-num").value + 1;
        this.setState({ fridge_temp: fri_temp }, () => this.setFridge(fri_temp));
        // save();
    }
    
    increaseFreezer(){ 
        var fre_temp = document.getElementById("freezer-num").value + 1;
        this.setState({ fridge_temp: fre_temp }, () => this.setFridge(fre_temp));
        // save();
    }
    
    decreaseFridge(){
        var fri_temp = document.getElementById("fridge-num").value - 1;
        this.setState({ fridge_temp: fri_temp }, () => this.setFridge(fri_temp));
        save();
    }
    
    decreaseFreezer(){
        var fre_temp = document.getElementById("freezer-num").value - 1;
        this.setState({ fridge_temp: fre_temp }, () => this.setFridge(fre_temp));
        // save();
    }

    render() {
        return (
            <div>
                <div className="fridge">
                    <div>
                        <h1>Fridge</h1>
                    </div>
                    <div id="fridge-interactable">
                        <button id="hot" onClick={this.increaseFridge}>Hot</button>
                        <div id="fridge-num"></div>
                        <button id="cold" onClick={this.decreaseFridge}>Cold</button>
                    </div>
                </div>
                <div className="freezer">
                    <div>
                        <h1>Freezer</h1>
                    </div>
                    <div id="freezer-interactable">
                        <button id="hot" onClick={this.increaseFreezer}>Hot</button>
                        <div id="freezer-num"></div>
                        <button id="cold" onClick={this.decreaseFreezer}>Cold</button>
                    </div>
                </div>
                <div className="schedule-wrap">
                    <input type="datetime-local" className="schedule"></input>
                </div>
            </div>
        );
    }
}

class Thermostat extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Thermostat</h1>
                </div>
                <button id="hot" onClick="increaseTemp()">Hot</button>
                <div id="temperature-num"></div>
                <button id="cold" onClick="decreaseTemp()">Cold</button>
                <br></br>
                <div className="schedule-wrap">
                    <input type="datetime-local" className="schedule"></input>
                </div>
            </div>
        );
    }
}

class PowerButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <button className="toggleButton" 
                onClick="toggleButton()">ON</button>
            </div>
        );
    }
}
>>>>>>> Stashed changes
