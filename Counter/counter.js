const counter = document.getElementById('counter');

function decrease() {
    let value = parseInt(counter.innerText);
    value = value - 1;
    counter.style.color = checkNeagtive(value);
    counter.innerText = value;
}

function reset() {
    counter.style.color = "white";
    counter.innerText = 0;
}

function increase() {
    let value = parseInt(counter.innerText);
    value = value + 1;
    counter.style.color = checkNeagtive(value);
    counter.innerText = value;
}

function checkNeagtive(value) {
    return value > 0 ? '#00FF00' :  value == 0 ? 'white' : '#FF6347';
}