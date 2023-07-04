let temp = 72; // default temperature
document.getElementById("temperature-num").innerHTML = temp.toString();

function increaseTemp(){ 
    temp += 1;
    document.getElementById("temperature-num").innerHTML = temp;
}

function decreaseTemp(){
    temp -= 1;
    document.getElementById("temperature-num").innerHTML = temp;
}