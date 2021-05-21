const textHolder = document.getElementById('text-holder');
const text = 'Hello!! I am Ayush!!!';
var i =0;

function displayLetter(){
    if(i<text.length){
        textHolder.children[i].classList.add("letter-anim");
        i++;
    }
    
}

function createElement(alphabet){
    console.log(alphabet);
        const letter = document.createElement('span');
        alphabet === ' '?letter.innerHTML = '&nbsp;' :letter.innerText = alphabet
        letter.className = "letter";
        textHolder.appendChild(letter);
}

function setUpString(){
    for (let index = 0; index < text.length; index++) {
        createElement(text[index]);
    }
setInterval(displayLetter,Math.random()*400);
}
setUpString();
