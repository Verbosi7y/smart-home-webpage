let coffeeBool = 1;
let vacuumBool = 1;
let lightingBool = 1;
let irrigationBool = 1;
let fridge = 40; // default temperature
let freezer = 20;
let thermostat_temp = 72; // default temperature
let city_name = 'Catonsville';

var db = {};
retrieve();

function save(){
    db = {FRIDGE:fridge, FREEZER:freezer, THERMOSTAT:thermostat_temp, 
        COFFEE:coffeeBool, VACUUM:vacuumBool, LIGHTING:lightingBool, 
        IRRIGATION:irrigationBool, WEATHER:city_name};

    var JSONObject = JSON.stringify(db);
    //JSON stands for JavaScript Object Notation
    /* The following is an example of JSON database
    {
        "xl123":{"NAME":"John Smith","MAJOR":"Math"},
        "kj345":{"NAME":"Steve McQueen","MAJOR":"CS"}
    }
    */
    localStorage.setItem("settingsDB", JSONObject);
    console.log(db);
    console.log(JSONObject);
}
function retrieve(){
    try {
        var JSONObject = localStorage.getItem("settingsDB");
        var JSObject = JSON.parse(JSONObject);

        setFridge(JSObject["FRIDGE"]);
        setFreezer(JSObject["FREEZER"]);
        setThermostat(JSObject["THERMOSTAT"]);
        setWeather(JSObject["WEATHER"]);
        loadCityTemp()
        setToggle(JSObject);

    } catch {
        save();
        retrieve();
    }
}
// FOR SCHEDULING
function remove(){
    /*
    var id = document.getElementById("studentid").value;
    var JSONObject = localStorage.getItem("localDB");
    var db = JSON.parse(JSONObject);
    delete db[id];
    var JSONObject = JSON.stringify(db);
    localStorage.setItem("localDB", JSONObject);
    */
}

function cleardb(){ localStorage.clear(); }