function createNote(){
   var noteDiv = document.createElement('div');
   noteDiv.className = "h-96 w-96 bg-yellow-300 flex flex-col mx-2";
   noteDiv.appendChild(createNavBar());
   noteDiv.appendChild(createTextArea());
   document.body.appendChild(noteDiv);
}

function createNavBar(){
    const navelement = document.createElement('div');
    navelement.className ="flex justify-end h-16 bg-yellow-600 px-3";
    const deletebutton = document.createElement('button');
    deletebutton.innerText = "🗑";
    deletebutton.className ="focus:outline-none"
    deletebutton.addEventListener('click',deleteNote);
    navelement.appendChild(deletebutton);
    return navelement;
}

function createTextArea(){
    const textarea = document.createElement('textarea');
    textarea.className="flex-grow bg-yellow-300 focus:outline-none";
    return textarea;
}

function deleteNote(e){
    document.body.removeChild(e.srcElement.parentElement.parentElement);
}