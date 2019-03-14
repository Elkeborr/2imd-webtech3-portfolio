class Note {
  constructor(title) {

    this.title = title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
   
  }
  createElement(title){

    let newNote = document.createElement('div');
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    newNote.innerHTML = "<p>"+this.notesText+"</p>"+
    "<a href='#' class='card-remove'>"+"Remove"+"</a>";
    newNote.classList.add("card");

    a.addEventListener('click', this.remove.bind(newNote));
    return newNote;
  }
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector('notes').appendChild(this.newNote);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

 
const note = JSON.stringify(newNote);
localStorage.setItem(note);


  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice

  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();

   note.add();
   note.saveToStorage();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();