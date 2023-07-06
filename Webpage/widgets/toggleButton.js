const buttonIDs = ["coffeeButton", "vacuumButton", "garden-lightButton", "garden-irrigationButton"];
const jsonIDMap = {"coffeeButton":"COFFEE", 
                    "vacuumButton":"VACUUM", 
                    "garden-lightButton":"LIGHTING", 
                    "garden-irrigationButton":"IRRIGATION"}


function toggleButton(buttonID) {
    let button = document.getElementById(buttonID);
    console.log(buttonID + " " + 
                button.innerText + " " + 
                window.getComputedStyle(button).backgroundColor);
    
    if(/* window.getComputedStyle(button).backgroundColor == 'green'
        && */ button.innerText == 'ON')
    {
        button.style.backgroundColor = 'red';
        button.innerText = 'OFF'
    } else if (/*window.getComputedStyle(button).backgroundColor == 'red'
    && */ button.innerText == 'OFF'){
        button.style.backgroundColor = 'green';
        button.innerText = 'ON'
    }

    switch (buttonID) {
        case "coffeeButton":
            coffeeBool = 1 - coffeeBool;
            break;
        case "vacuumButton":
            vacuumBool = 1 - vacuumBool;
            break;
        case "garden-lightButton":
            lightingBool = 1 - lightingBool;
            break;
        case "garden-irrigationButton":
            irrigationBool = 1 - irrigationBool;
            break;
    }

    save();
}

function setToggle(toggleSettings) {
    let button = document.getElementById("coffeeButton");

    coffeeBool = toggleSettings["COFFEE"];
    vacuumBool = toggleSettings["VACUUM"];
    lightingBool = toggleSettings["LIGHTING"];
    irrigationBool = toggleSettings["IRRIGATION"];

    for(let i = 0; i < buttonIDs.length; i++){
        button = document.getElementById(buttonIDs[i]);
        if(toggleSettings[jsonIDMap[buttonIDs[i]]] == 1){
            button.style.backgroundColor = 'green';
            button.innerText = 'ON'
        } else {
            button.style.backgroundColor = 'red';
            button.innerText = 'OFF'
        }
    }
}