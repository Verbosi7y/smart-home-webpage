let fridge = 40; // default temperature
let freezer = 20;
document.getElementById("fridge-num").innerHTML = fridge.toString();
document.getElementById("freezer-num").innerHTML = freezer.toString();


function increaseFridge(){ 
    fridge += 1;
    document.getElementById("fridge-num").innerHTML = fridge;
}

function increaseFreezer(){ 
    freezer += 1;
    document.getElementById("freezer-num").innerHTML = freezer;
}

function decreaseFridge(){
    fridge -= 1;
    document.getElementById("fridge-num").innerHTML = fridge;
}

function decreaseFreezer(){
    freezer -= 1;
    document.getElementById("freezer-num").innerHTML = freezer;
}