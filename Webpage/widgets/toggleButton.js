function toggleButton(buttonID){
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
}