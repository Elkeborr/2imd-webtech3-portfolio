class Note {
  constructor(title) {
    this.title=title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  
  }

  createElement(title){
 // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

        // nieuw html element creëren
    let newNote = document.createElement('div');
    // wat moet er in het element

    //let text =document.getElementById('txtAddNote').value;
    /*newNote.innerHTML = "<p>"+ `${this.title}`+"</p>";
       "<a href='#' class='card-remove'>"+"Remove"+"</a>"; 
       => als we dit gebruiken kunnen we niet elke btn en tekst apart aanspreken*/

    // note de juiste klasse meegeven 
    newNote.classList.add("card");
    
        //de knop removen doen werken, zo verwijderen we de "verbinding"
        //knop aanspreken en aanmaken
        let removeBtn = document.createElement('a');
        removeBtn.setAttribute("href", "#")
        removeBtn.innerHTML= 'Remove';
       
        removeBtn.addEventListener('click', this.remove.bind(newNote));

        let tekst = document.createElement('p');
        tekst.innerHTML = this.title;

        newNote.appendChild(tekst);
        newNote.appendChild(removeBtn);
        
        
        return newNote;
    
  }

  add(){
    // HINT🤩
    // this function should append the note to the screen somehow

 // we gebruiker this element omdat deze al geconnecteerd staat met de createelement functie
    document.querySelector('.notes').appendChild(this.element);
  }
  

  saveToStorage(callback){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

  //  let arrnotes = [];
   // localStorage.setItem( itemIndex, JSON.stringify(arrnotes) );
    //localStorage.setItem('notes', JSON.stringify(text));
  
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

   this.newNote = localStorage.removeItem(this.element);
    


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
    let i= document.getElementById('txtAddNote').value;
    for ( i = 0; i < localStorage.length; i++){
    let note = new Note ();
    JSON.parse(localStorage.getItem('notes'));
    note.add([i]);
      
  }
  }
   


  createNote(e){
    // this function should create a new note by using the Note() class
    let note = new Note ();
    note.saveToStorage();
    note.add();
    this.reset();

    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
    
    document.querySelector('form').reset();
  }
  
}

let app = new App();
