function setThermostat(temp){
    thermostat_temp = temp;
    document.getElementById("temperature-num").innerHTML = thermostat_temp + " F°";
}

function increaseTemp(){ 
    thermostat_temp += 1;
    document.getElementById("temperature-num").innerHTML = thermostat_temp + " F°";
    save();
}

function decreaseTemp(){
    thermostat_temp -= 1;
    document.getElementById("temperature-num").innerHTML = thermostat_temp + " F°";
    save();
}