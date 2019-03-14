class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  
  }




  createElement(title){
 // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
    let newNote = document.createElement('div');
    let notesText =document.getElementById('txtAddNote').value;
   
    newNote.innerHTML = "<p>"+notesText+"</p>"+
    "<a href='#' class='card-remove'>"+"Remove"+"</a>";
    console.log(notesText);
    newNote.classList.add("card"); 
    let btn =document.getElementById('btnAddNote');
    btn.addEventListener('click', this.remove.bind(newNote));
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
    
    window.localStorage.setItem('note', JSON.stringify(newNote));


  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

  } 
}
let notes = new Note();

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
    let i;
    for ( i = 0; i < localStorage.length; i++){
      window.localStorage.getItem('note')
      note.add();
      
  }
  }
   


  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();

   note.add();
   note.saveToStorage();
   this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector(form).reset();
  }
  
}

//let app = new App();
