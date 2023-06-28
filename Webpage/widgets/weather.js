var temp = 72; // default temperature
document.getElementById("temperature-num").innerHTML = temp.toString();

function increaseTemp(){ 
    document.getElementById("temperature-num").innerHTML = (++temp).toString();
}

function decreaseTemp(){
    document.getElementById("temperature-num").innerHTML = (--temp).toString();
}