class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {page: 'Home', // Home Page
            city_name: 'Baltimore', // Default City
            weather_temp: 0, // Default weather temps
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

        this.save();
        this.retrieve();
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
                            <Fridge />
                        </article>
                    </span>

                    <span className="widget" id="thermostat"> 
                        <article className="module">
                            <Thermostat />
                        </article>
                    </span>

                    
                    <span className="widget" id="coffee"> 
                        <article className="module">
                            <PowerButton />
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
                            <PowerButton />
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
                            <PowerButton />
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
                            <PowerButton />
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