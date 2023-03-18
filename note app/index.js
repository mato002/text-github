const btnEl = document.getElementById("btn");
const appEl =document.getElementById("app");


function createNoteEl(id,content){
    const element =document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value=content ;

    element.addEventListener("dblclick",()=>{
const warning = confirm("do you want  to  delete this note?");
if(warning){
    deleteNote(id, element);
}
    });

    element.addEventListener("input", ()=>{
        updateNote(id, element.value)
    });
    return element;
}
    function deleteNote(){
        const notes =getNotes().filter((note)=>note.id !=id)
        saveNote(notes)
        appEl.removeChild(element)
    }
    function updateNote(){
        const notes = getNotes()
        const target =notes.filter((note)=>note.id == id)[0];
        target.content = content;
        saveNote(notes);
    }

function addNote()
{
    const notes =[];
    const noteObj ={
        id: Math.floor(Math.random()*100000),
        content:" ",

    }
    const noteEl =createNoteEl(noteObj.id,noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNote(notes)

}
function saveNote(note){
    localStorage.setItem("note-app",JSON.stringify("notes"))
}
function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
    
}
btnEl.addEventListener("click",addNote);
