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
        
        // note de juiste klasse meegeven 
        newNote.classList.add("card");
       
        return newNote;
    
  }

  add(){
    // HINT🤩
    // this function should append the note to the screen somehow

 // we gebruiker this element omdat deze al geconnecteerd staat met de createelement functie
    document.querySelector('.notes').appendChild(this.element);
  }
  

  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

  //  let arrnotes = [];
   // localStorage.setItem( itemIndex, JSON.stringify(arrnotes) );
    //localStorage.setItem('notes', JSON.stringify(text));

  let key = 0;
    for (var i = 0; i < localStorage.length; i++) {
      key++;
    }

  
   
      let arrNote = [];
      arrNote.push(this.title);
      localStorage.setItem(`${key}`, JSON.stringify(`${arrNote}`));

   // localStorage.setItem(`${key}`, JSON.stringify(`${arrNote}`));
    
    }

  
  
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    //console.log(Object.keys(`${this.arrNote}`));

    /*let arrStored =JSON.stringify((localStorage.getItem(Object.keys(`${this.arrNote}`))));
    console.log( arrStored );
    let deletedItem = localStorage.removeItem(arrStored);*/
   // console.log(deletedItem );


//this.classList.replace("card","card-remove");

//this.newNote = JSON.parse(localStorage.removeItem(`${this.key}`));

let notesremove = JSON.parse(localStorage.getItem(Object.keys(`${this.arrNote}`)));
    
let index = notesremove.indexOf(this);

console.log(index);


  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    this.btnAdd = document.getElementById('btnAddNote');
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    
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

    
   

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(key);
      let text = JSON.parse(localStorage.getItem(key));
      console.log(text);
      let note = new Note(text);
      note.add();

    }
  
  }

  createNote(e){

    let innerText= document.querySelector('#txtAddNote').value;

    // this function should create a new note by using the Note() class
    let note = new Note (innerText);
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
