class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setCity(this.props.city);
    }

    componentWillUnmount() {
        this.props.onWeatherChange(document.getElementById("cityInput").value);
    }

    setCity = (storeCity) => {
        document.getElementById("cityInput").value = storeCity;
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

    componentDidMount() {
        this.setFridge(this.props.fridge);
        this.setFreezer(this.props.freezer);
    }

    setFridge = (temp) => {
        this.props.onFridgeChange(temp);
        document.getElementById("fridge-num").innerHTML = temp + " F°";
    }
    
    setFreezer = (temp) =>  {
        this.props.onFreezerChange(temp);
        document.getElementById("freezer-num").innerHTML = temp + " F°";
    }
    
    increaseFridge = () => { 
        this.setFridge(this.props.fridge + 1);
    }
    
    increaseFreezer = () => { 
        this.setFreezer(this.props.freezer + 1);
    }
    
    decreaseFridge = () => {
        this.setFridge(this.props.fridge - 1);
    }
    
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

    componentDidMount() {
        this.setThermostat(this.props.thermostat);
    }

    setThermostat = (temp) =>  {
        document.getElementById("temperature-num").innerHTML = temp + " F°";
        this.props.onThermostatChange(temp);
    }
    
    increaseTemp = () => { 
        this.setThermostat(this.props.thermostat + 1);
    }

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

    componentDidMount() {
        if (this.props.power === 0){
            this.props.onPowerChange(0);
        } else {
            this.props.onPowerChange(0);
        }
    }

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

            if (p_button === 1){
                button = <button className="toggleButton" id="on" 
                onClick={this.toggleButton}>ON</button>
            } else {
                button = <button className="toggleButton" id="off"
                onClick={this.toggleButton}>OFF</button>
            }
            return (
                <div>
                    {button}
                </div>
        );
    }
}