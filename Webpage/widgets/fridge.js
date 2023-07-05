let fridge = 40; // default temperature
let freezer = 20;
retrieve();

function setFridge(temp){
    fridge = temp;
    document.getElementById("fridge-num").innerHTML = fridge + " F°";
    save();
}

function setFreezer(temp){
    freezer = temp;
    document.getElementById("freezer-num").innerHTML = freezer + " F°";
    save();
}

function increaseFridge(){ 
    fridge += 1;
    document.getElementById("fridge-num").innerHTML = fridge + " F°";
    save();
}

function increaseFreezer(){ 
    freezer += 1;
    document.getElementById("freezer-num").innerHTML = freezer + " F°";
    save();
}

function decreaseFridge(){
    fridge -= 1;
    document.getElementById("fridge-num").innerHTML = fridge + " F°";
    save();
}

function decreaseFreezer(){
    freezer -= 1;
    document.getElementById("freezer-num").innerHTML = freezer + " F°";
    save();
}