class App extends React.Component {
    constructor(props){
        super(props);

        // Bind Handles for Power Buttons
        this.handleC_Power = this.handleC_Power.bind(this);
        this.handleV_Power = this.handleV_Power.bind(this);
        this.handleL_Power = this.handleL_Power.bind(this);
        this.handleI_Power = this.handleI_Power.bind(this);
        
        // Bind Handles for both Fridge and Freezer
        this.handleFridge = this.handleFridge.bind(this);
        this.handleFreezer = this.handleFreezer.bind(this);

        // Bind Handle for Thermostat
        this.handleThermostat = this.handleThermostat.bind(this);
        this.handleThermostat2 = this.handleThermostat2.bind(this);

        // Bind Handle for Weather
        this.handleWeather = this.handleWeather.bind(this);

        // A mapped db of all important variables
        this.state = {page: 'Home', // Home Page
            city_name: 'Baltimore', // Default City
            weather_temp: 0, // Default weather temps
            room_temp: 0, 
            fridge_temp: 0,
            freezer_temp: 0,
            COFFEE: 0,
            VACUUM: 0,
            LIGHTING: 0,
            IRRIGATION: 0//,
            // SCHEDULER:schedule_r, 
            // SCHEDULET:schedule_t, 
            // SCHEDULEC:schedule_c, 
            // SCHEDULEV:schedule_v,
            // SCHEDULEGL:schedule_gl, 
            // SCHEDULEGI:schedule_gi
        };
    }

    // Retrieve settings/db from last session before Render
    componentWillMount() {
        this.retrieve();
    }

    // Retrieve settings/db from last session after Render
    componentDidMount() {
        this.retrieve();
    }

    // Save the db of states in a JSON format as "settingsDB"
    save() {
        var JSONObject = JSON.stringify(this.state);
        localStorage.setItem("settingsDB", JSONObject);
        console.log(this.state);
        console.log(JSONObject);
    }

    // Retrieve the db of states in a JSON format as "settingsDB"
    retrieve(){
        try {
            // Retrieve JSON and turn into Object
            var JSONObject = localStorage.getItem("settingsDB");
            var JSObject = JSON.parse(JSONObject);
            
            // Set the current states from previously saved states
            this.setState({city_name: JSObject["city_name"]}, () => { this.save();});
            this.setState({fridge_temp: JSObject["fridge_temp"]}, () => { this.save();});
            this.setState({freezer_temp: JSObject["freezer_temp"]}, () => { this.save();});
            this.setState({room_temp: JSObject["room_temp"]}, () => { this.save();});
            this.setState({room_temp2: JSObject["room_temp2"]}, () => { this.save();});
            this.setState({weather_temp: JSObject["weather_temp"]}, () => { this.save();});
            this.setState({COFFEE: JSObject["COFFEE"]}, () => { this.save();});
            this.setState({VACUUM: JSObject["VACUUM"]}, () => { this.save();});
            this.setState({LIGHTING: JSObject["LIGHTING"]}, () => { this.save();});
            this.setState({IRRIGATION: JSObject["IRRIGATION"]}, () => { this.save();});

        // This is triggered for the newest fresh sessions
        } catch (e){
            this.save();
            this.retrieve();
        }
    }

    // Coffee state handler
    handleC_Power(p_state){
        this.setState({COFFEE: p_state}, () => { this.save();});
    }

    // Vacuum state handler
    handleV_Power(p_state){
        this.setState({VACUUM: p_state}, () => { this.save();});
    }

    // Garden Lighting state handler
    handleL_Power(p_state){
        this.setState({LIGHTING: p_state}, () => { this.save();});
    }

    // Garden Irrigation state handler
    handleI_Power(p_state){
        this.setState({IRRIGATION: p_state}, () => { this.save();});
    }

    // Fridge temperature state handler
    handleFridge(temp){
        this.setState({fridge_temp: temp}, () => { this.save();});
    }

    // Freezer temperature state handler
    handleFreezer(temp){
        this.setState({freezer_temp: temp}, () => { this.save();});
    }

    // Thermostat temperature state handler
    handleThermostat(temp){
        this.setState({room_temp: temp}, () => { this.save();});
    }
    
    handleThermostat2(temp){
        this.setState({room_temp2: temp}, () => { this.save();});
    }

    // Weather temperature state handler
    handleWeather(city){
        this.setState({city_name: city}, () => { this.save();});
    }
    
    // Renders the Main Page
    render () {
        if (this.state.page === "Home"){
        return (
            <div>
                <div id="home-title">Farmer's Smart Home Hub</div>
                <div className="d-flex justify-content-center flex-wrap">
                    <span className="widget" id="weather">
                        <article className="module">
                            <div>
                                <h1>Weather</h1>
                            </div>
                            <Weather city={this.state.city_name} onWeatherChange={this.handleWeather}/>
                        </article>
                    </span>

                    <span className="widget" id="fridge">
                            <Fridge fridge={this.state.fridge_temp} freezer={this.state.freezer_temp} onFridgeChange={this.handleFridge} onFreezerChange={this.handleFreezer}/>
                    </span>

                    <span className="widget" id="thermostat"> 
                        <article className="module">
                            <Thermostat thermostat={this.state.room_temp} onThermostatChange={this.handleThermostat} />
                        </article>
                    </span>

                    <span className="widget" id="thermostat"> 
                        <article className="module">
                            <Thermostat2 thermostat={this.state.room_temp2} onThermostatChange={this.handleThermostat2} />
                        </article>
                    </span>
                    
                    <span className="widget" id="coffee"> 
                        <article className="module">
                            <PowerButton power={this.state.COFFEE} onPowerChange={this.handleC_Power}/>
                            <div>
                                <h1>Coffee</h1>
                            </div>
                            <div className="schedule-wrap">
                                <input type="datetime-local" className="schedule"></input>
                            </div>
                        </article>
                    </span>

                    <span className="widget" id="vacuum"> 
                        <article className="module">
                            <PowerButton power={this.state.VACUUM} onPowerChange={this.handleV_Power}/>
                            <div>
                                <h1>Vacuum</h1>
                            </div>
                            <div className="schedule-wrap">
                                <input type="datetime-local" className="schedule"></input>
                            </div>
                        </article>
                    </span>

                    <span className="widget" id="garden-light"> 
                        <article className="module">
                            <PowerButton power={this.state.LIGHTING} onPowerChange={this.handleL_Power}/>
                            <div>
                                <h1>Garden Lighting</h1>
                            </div>
                            <div className="schedule-wrap">
                                <input type="datetime-local" className="schedule"></input>
                            </div>
                        </article>
                    </span>

                    <span className="widget" id="garden-irrigation"> 
                        <article className="module">
                            <PowerButton power={this.state.IRRIGATION} onPowerChange={this.handleI_Power}/>
                            <div>
                                <h1>Garden Irrigation</h1>
                            </div>
                            <div className="schedule-wrap">
                                <input type="datetime-local" className="schedule"></input>
                            </div>
                        </article>
                    </span>

                    <span className="widget" id="add-device"> 
                        <article className="module">
                            <div id="add-device-plus"> + </div>
                            <div>
                                <h1>Add device</h1>
                            </div>
                        </article>
                    </span>

                </div>
            </div>
        );
        }
    }
}

// Create a container and render the page using DOM written in React
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);