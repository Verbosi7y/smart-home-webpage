class App extends React.Component {
    constructor(props){
        super(props);
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

        this.handleC_Power = this.handleC_Power.bind(this);
        this.handleV_Power = this.handleV_Power.bind(this);
        this.handleL_Power = this.handleL_Power.bind(this);
        this.handleI_Power = this.handleI_Power.bind(this);

        this.handleFridge = this.handleFridge.bind(this);
        this.handleFreezer = this.handleFreezer.bind(this);

        this.handleThermostat = this.handleThermostat.bind(this);
        
        // this.save();
        // this.retrieve();
    }

    save() {
        var JSONObject = JSON.stringify(this.state);
        localStorage.setItem("settingsDB", JSONObject);
        console.log(this.state);
        console.log(JSONObject);
    }

    retrieve(){
        try {
            var JSONObject = localStorage.getItem("settingsDB");
            var JSObject = JSON.parse(JSONObject);
    
            setFridge(JSObject["FRIDGE"]);
            setFreezer(JSObject["FREEZER"]);
            setThermostat(JSObject["THERMOSTAT"]);
            setWeather(JSObject["WEATHER"]);
            setToggle(JSObject);
    
        } catch (e){
            this.save();
        }
    }

    handleC_Power(p_state){
        this.setState({COFFEE: p_state});
        this.save();
    }

    handleV_Power(p_state){
        this.setState({VACUUM: p_state});
        this.save();
    }

    handleL_Power(p_state){
        this.setState({LIGHTING: p_state});
        this.save();
    }

    handleI_Power(p_state){
        this.setState({IRRIGATION: p_state});
        this.save();
    }

    handleFridge(temp){
        this.setState({fridge_temp: temp});
        this.save();
    }

    handleFreezer(temp){
        this.setState({freezer_temp: temp});
        this.save();
    }

    handleThermostat(temp){
        this.setState({room_temp: temp});
        this.save();
    }
    
    render () {
        if (this.state.page === "Home"){
        return (
            <div className="container border mt-5 p-3">
                <div id="home-title">Farmer's Smart Home Hub</div>
                <div className="d-flex justify-content-center flex-wrap">
                    <span className="widget" id="weather">
                        <article className="module">
                            <div>
                                <h1>Weather</h1>
                            </div>
                            <Weather />
                        </article>
                    </span>

                    <span className="widget" id="fridge">
                        <article className="module">
                            <Fridge fridge={this.state.fridge_temp} freezer={this.state.freezer_temp} onFridgeChange={this.handleFridge} onFreezerChange={this.handleFreezer}/>
                        </article>
                    </span>

                    <span className="widget" id="thermostat"> 
                        <article className="module">
                            <Thermostat thermostat={this.state.room_temp} onThermostatChange={this.handleThermostat} />
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

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);