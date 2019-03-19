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

        //knop aanspreken en aanmaken
        let removeBtn = document.createElement('a');
        removeBtn.setAttribute("href", "#")
        removeBtn.innerHTML= 'Remove';
       
        removeBtn.addEventListener('click', this.remove.bind(newNote));

        //tekst in de div zetten
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

 // we gebruiker this.element omdat deze al geconnecteerd staat met de createelement functie
    document.querySelector('.notes').appendChild(this.element);
  }
  

  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

  /*Het is de bedoeling dat je als key bv; note heb en de value bestaat uit een
  array*/ 
    
    // We definieren de array van de note is al bestaat
    let arrNote = JSON.parse(localStorage.getItem('note'));

    //als de array null is gaan we er een aanmaken
    if (arrNote == null){
      arrNote = [];
    }

    // we pushen de title in de array
    arrNote.push(this.title);

    // We slagen de array op in localstorage 
    localStorage.setItem(`note`, JSON.stringify( arrNote));
    
    }

  
  
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
   
    // we halen de array op van de local storage
 let noteRemove = JSON.parse(localStorage.getItem('note'));

 // we zoeken in de array de notitie die we willen verwijderen = this
 // https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 let noteIndex = noteRemove .indexOf(this);

 // https://love2dev.com/blog/javascript-remove-from-array/
// We verwijderen 1 element die we vinden door de noteIndex
 noteRemove.splice(noteIndex , 1);
 // Doordat we er 1 verwijderd hebben moeten we de array updaten (moet in een string)
 localStorage.setItem('note', JSON.stringify(noteRemove));

  // We voegen er een klasse aan toe zodat deze van het scherm verdwijnt
 this.classList.add("fade-out-animation");


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

    // we maken een constate key aan waar we de array oproepen van de note key
    const key = JSON.parse(localStorage.getItem('note'));

    /* is deze array niet gelijk aan null  en is de lengte groter als null dan
    zorgen we voor een forEach loop die een nieuwe note gaat aanmaken voor elk array element*/
     if (key != null){
       if(key.length > 0){
        key.forEach(item =>{
          let note = new Note(item);
          note.add();
        })
     
       }
     
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
