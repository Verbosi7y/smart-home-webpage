class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    // Retrieve City
    componentDidMount() {
        this.setCity(this.props.city);
    }

    // Save City when exited or refreshed
    componentWillUnmount() {
        this.props.onWeatherChange(document.getElementById("cityInput").value);
    }

    // Set the City
    setCity = (storeCity) => {
        document.getElementById("cityInput").value = storeCity;
        this.setState({ city_name: storeCity }, () => this.loadCityTemp());
    }

    // User enters a city and return the current hourly temperature
    // Invalid cities are displayed as "- F°"
    loadCityTemp() {
        const date = new Date();

        // User can enter ANY city
        const OWM_API_Key = '';
        const city_name = document.getElementById("cityInput").value;
        const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${OWM_API_Key}`;
        
        // If a coordinate exists for an existing city on OpenWeatherMap, then fetch JSON
        fetch(locationURL)
        .then(response => response.json())
        .then(cityInfo => {
            // Fetch Temperature information for the given coordinate
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.coord.lat}&longitude=${cityInfo.coord.lon}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1`;
            fetch(weatherUrl)
            .then(response => response.json())
            .then(weather => {
                document.getElementById("weather-num").innerHTML = weather.hourly.temperature_2m[date.getHours()] + " F°";
            })

            // Invalid Coordinates
            .catch(error => {
                document.getElementById("weather-num").innerHTML = "- F°";
                console.log(error);
            });
        })
        // Invalid City Name
        .catch(error => {
            document.getElementById("weather-num").innerHTML = "- F°";
            console.log(error);
        });
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
    constructor(props){
        super(props);
    }

    // Set Temperature of Fridge and Freezer.
    // Previous sessions from Local Storage
    componentDidMount() {
        this.setFridge(this.props.fridge);
        this.setFreezer(this.props.freezer);
    }

    // Set a temperature for the Fridge
    setFridge = (temp) => {
        this.props.onFridgeChange(temp);
        document.getElementById("fridge-num").innerHTML = temp + " F°";
    }
    
    // Set a temperature for the Freezer
    setFreezer = (temp) =>  {
        this.props.onFreezerChange(temp);
        document.getElementById("freezer-num").innerHTML = temp + " F°";
    }
    
    // Increment Fridge Temp
    increaseFridge = () => { 
        this.setFridge(this.props.fridge + 1);
    }
    
    // Increment Freezer Temp
    increaseFreezer = () => { 
        this.setFreezer(this.props.freezer + 1);
    }
    
    // Decrement Fridge Temp
    decreaseFridge = () => {
        this.setFridge(this.props.fridge - 1);
    }
    
    // Decrement Freezer Temp
    decreaseFreezer = () => {
        this.setFreezer(this.props.freezer - 1);
    }

    render() {
        return (
            <article className="module">
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
            </article>
        );
    }
}

class Thermostat extends React.Component {
    constructor(props){
        super(props);
    }

    // Set Temperature of previous sessions from Local Storage
    componentDidMount() {
        this.setThermostat(this.props.thermostat);
    }

    // Set a temperature
    setThermostat = (temp) =>  {
        document.getElementById("temperature-num").innerHTML = temp + " F°";
        this.props.onThermostatChange(temp);
    }
    
    // Increment Temp
    increaseTemp = () => { 
        this.setThermostat(this.props.thermostat + 1);
    }

    // Decrement Temp
    decreaseTemp = () => { 
        this.setThermostat(this.props.thermostat - 1);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Thermostat</h1>
                </div>
                <button id="hot" onClick={this.increaseTemp}>Hot</button>
                <div id="temperature-num"></div>
                <button id="cold" onClick={this.decreaseTemp}>Cold</button>
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

    // Set the state of the power button from settings in Local Storage
    componentDidMount() {
        if (this.props.power === 0){
            this.props.onPowerChange(0);
        } else {
            this.props.onPowerChange(0);
        }
    }

    // Button is Toggled{1->0 or 0->1}
    toggleButton = () => {
        const p_button = this.props.power;
        if (p_button === 0){
            this.props.onPowerChange(1);
        }
        else{
            this.props.onPowerChange(0);
        }
    }

    render() {
            const p_button = this.props.power;
            let button;

            // Turn Button ON
            if (p_button === 1){
                button = <button className="toggleButton" id="on" 
                onClick={this.toggleButton}>ON</button>
            // Turn Button OFF
            } else {
                button = <button className="toggleButton" id="off"
                onClick={this.toggleButton}>OFF</button>
            }
            // Render either an ON or OFF Button
            return (
                <div>
                    {button}
                </div>
        );
    }
}
