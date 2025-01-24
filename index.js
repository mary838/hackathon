const display = document.getElementById("result");
function appendNumber(input) {
  display.value += input;
}

function clearResult() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function backspace() {
  display.v;
}
function square() {
  display.value = display.value * display.value;
}
function persiontage() {
  display.value = display.value / 100;
}
function backspace() {
  display.value = display.value.slice(0, -1);
}
