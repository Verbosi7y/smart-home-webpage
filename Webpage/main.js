class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {page: 'Home',   // default page
            temperature: 65,// default set temperature
            power: 0,       // system is off by default
            p_start: new Date(),//default program start date
            p_end: new Date(),  // default program end date
            p_temperature: 65   // default program set temperature
        };
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
                            <div className="fridge">
                                <div>
                                    <h1>Fridge</h1>
                                </div>
                                <div id="fridge-interactable">
                                    <button id="hot" onClick="{increaseFridge()}">Hot</button>
                                    <div id="fridge-num"></div>
                                    <button id="cold" onClick="{decreaseFridge}">Cold</button>
                                </div>
                            </div>
                            <div className="freezer">
                                <div>
                                    <h1>Freezer</h1>
                                </div>
                                <div id="freezer-interactable">
                                    <button id="hot" onClick="{increaseFreezer}">Hot</button>
                                    <div id="freezer-num"></div>
                                    <button id="cold" onClick="{decreaseFreezer}">Cold</button>
                                </div>
                            </div>
                            <div className="schedule-wrap">
                                <input type="datetime-local" className="schedule"></input>
                            </div>
                        </article>
                    </span>

                    <span className="widget" id="thermostat"> 
                        <article className="module">
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
                        </article>
                    </span>

                    <span className="widget" id="coffee"> 
                        <article className="module">
                            <button id="coffeeButton" className="toggleButton" 
                                    onClick="toggleButton('coffeeButton')">ON</button>
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
                            <button id="vacuumButton" className="toggleButton" 
                                    onClick="toggleButton('vacuumButton')">ON</button>
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
                            <button id="garden-lightButton" className="toggleButton" 
                                    onClick="toggleButton('garden-lightButton')">ON</button>
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
                            <button id="garden-irrigationButton" className="toggleButton" 
                                    onClick="toggleButton('garden-irrigationButton')">ON</button>
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
                            <div style="font-size: 120px; margin: 0px; padding: 0px"> + </div>
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