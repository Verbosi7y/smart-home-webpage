let fridge = 40; // default temperature
let freezer = 20;
document.getElementById("fridge-num").innerHTML = fridge.toString() + " F°";
document.getElementById("freezer-num").innerHTML = freezer.toString() + " F°";


function increaseFridge(){ 
    fridge += 1;
    document.getElementById("fridge-num").innerHTML = fridge + " F°";
}

function increaseFreezer(){ 
    freezer += 1;
    document.getElementById("freezer-num").innerHTML = freezer + " F°";
}

function decreaseFridge(){
    fridge -= 1;
    document.getElementById("fridge-num").innerHTML = fridge + " F°";
}

function decreaseFreezer(){
    freezer -= 1;
    document.getElementById("freezer-num").innerHTML = freezer + " F°";
}