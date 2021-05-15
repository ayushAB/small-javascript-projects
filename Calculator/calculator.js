var screenDiv = document.getElementById("calculatorScreen");
var content = "";
function updatescreen(divref) {
    content += divref.innerHTML;
    screenDiv.innerHTML = "";
    screenDiv.innerHTML = content;
}

function calculateExpression() {


    try {
        var result = eval(content);
        screenDiv.innerHTML = "";
        screenDiv.innerHTML = result;
        content = "";
    }
    catch (err) {
        screenDiv.innerHTML = "";
        screenDiv.innerHTML = err.message;
        content = "";
    }
}

function clearScreen() {
    content = "";
    screenDiv.innerHTML = "";
}