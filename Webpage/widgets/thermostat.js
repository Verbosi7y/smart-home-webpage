let temp = 72; // default temperature
document.getElementById("temperature-num").innerHTML = temp.toString() + " F°";

function increaseTemp(){ 
    temp += 1;
    document.getElementById("temperature-num").innerHTML = temp + " F°";
}

function decreaseTemp(){
    temp -= 1;
    document.getElementById("temperature-num").innerHTML = temp + " F°";
}