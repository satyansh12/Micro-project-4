const display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '0';
}


function calculate() {
    try {
        const expression = display.value.replace(/x/g, '*'); 
        const result = new Function('return ' + expression)();
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
