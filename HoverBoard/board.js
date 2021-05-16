const size = 2;
const colors = ['#fc5404','#e93b81','#1eae98','#f7fd04','#583d72'];
function giveRandomcolor(ele) {
    ele.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}
function removeColor(ele) {
    ele.style.backgroundColor = "rgba(75,85,99,1)";
}

function createCanvas(rows) {
    document.body.innerHTML ="";
    document.body.style.backgroundColor = "rgba(75,85,99,1)";
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    for (let index = 0; index < rows; index++) {
        const rowDiv = document.createElement('div');
        rowDiv.id = "row_" + index;
        rowDiv.className = "flex justify-evenly";
        for (let i = 0; i < rows; i++) {
            const element = document.createElement('div');
            element.className = "bg-gray-600 rounded border border-black";
            element.id = "box_" + index + "_" + i;
            element.style.height = (window.innerHeight / rows) * size + 'px';
            element.style.width = (window.innerHeight / rows) * size + 'px';
            element.addEventListener('mouseout',function(){
                setTimeout(()=>{
                    removeColor(element)
                },2000);
                
            },false);
            element.addEventListener('mouseover', function (){
                giveRandomcolor(element);
            },false);
            rowDiv.appendChild(element);
        }
        mainDiv.appendChild(rowDiv);
    }
}
window.addEventListener('resize', createCanvas(100));
createCanvas(40);