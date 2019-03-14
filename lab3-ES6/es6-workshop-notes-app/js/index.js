class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  
  }

  createElement(title){
 // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
        // nieuw html element creëren
        let Text= document.getElementById('txtAddNote');
    let newNote = document.createElement('div');
        // wat moet er in het element
    newNote.innerHTML = "<p>"+Text+"</p>"+
    "<a href='#' class='card-remove'>"+"Remove"+"</a>";
        // note de juiste klasse meegeven 
    newNote.classList.add("card"); 

/* NIET SNAPPEN
  let i =0;
  new Promise( (resolve, reject) => {
      setTimeout( () => {

        let btn = document.getElementsByTagName("a");
        btn[i].addEventListener('click', this.remove.bind(this.title));
i++;
      }, 5000 )
      }); 
*/
  return newNote;
    
  }

  add(){
    // HINT🤩
    // this function should append the note to the screen somehow

    document.querySelector('.notes').appendChild(this.newNote);
  }
  


  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
  localStorage.setItem('notes', JSON.stringify(newNote));

  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

  } 
}



class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    this.btnAdd = document.getElementById('btnAddNote');
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.Text = document.getElementById('txtAddNote');
    this.loadNotesFromStorage();

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
      JSON.parse(localStorage.getItem('notes')); 
 
      
  }
  }
   


  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();

   
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector(form).reset();
  }
  
}

let app = new App();
