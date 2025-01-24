
const display= document.getElementById("result");
function appendNumber(input){
    display.value += input;
}

function clearResult(){
    display.value= "";
}

function calculate(){
    display.value=eval(display.value)
    
}

function backspace(){
    display.value=display.value.slice(0,-1)
}

function square(){
    display.value=display.value*display.value
}
function trangle(){
    display.value=display.value*display.value*display.value;
}
function persiontage(){
    display.value=display.value/100
}