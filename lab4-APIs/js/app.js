console.log("🙈 🙉 🙊");

class Weather{
    constructor(API_KEY){
        // in gang zetten van de app 
        this.API_KEY = API_KEY;
        console.log("jow");
        this.initialize();
    }

    initialize(){
        // eerste stap is de locatie opvragen
        // aanmakene van een nieuwe fucntie die we buiten deze gaan aanmaken
        this.getMyLocation();
        console.log(navigator);
    }

    getMyLocation(){
        console.log("Getting location");
        // locatie opvragen uit navigator
        // twee argumenten, position and err
        navigator.geolocation.getCurrentPosition(position => { //function(position)
        console.log("found you");
       let lat=position.coords.latitude;
        let lng = position.coords.longitude;
        // weer opvragen van de specifieke locatie
        this.getWeather(lat,lng);
        console.log(position);

    }, err => {
        console.log("mispoes");
    });
    }
// je moet zien dat de parameters ook worden opgevangen
    getWeather(lat, lng){
        //ajax call / XHR
        //https://api.darksky.net/forecast/70cbb5b3805551203ecfbda0653231af/37.8267,-122.4233

        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(json=>{
            console.log(json);
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector("body").appendChild(temp);
        })
    }

}
// let hier mee op want nu kan iedereen u key zien, normaal zitten die op de server 

let app = new Weather('70cbb5b3805551203ecfbda0653231af');

class meme{

    constructor(API_KEY2){
        // in gang zetten van de app 
        this.API_KEY2 = API_KEY2;
        console.log("jow2");
        this.initialize();
    }

    initialize(){
        this.getMeme();
        
    }

    getMeme(){
       // http://version1.api.memegenerator.net//MgImages_Search?q=insanity&apiKey=demo
        let urlmeme = `https://cors-anywhere.herokuapp.com/http://version1.api.memegenerator.net//MgImages_Search?q=insanity&${this.API_KEY2}`;
        console.log(urlmeme);
        
/* urlmeme geeft een array terug in json met daarin een nummer die dan in de img geplakt moet worden*/

 fetch(urlmeme)
        .then(response =>{
            return response.json();
        })
        .then(json=>{
            console.log(json);
            let meme = document.createElement("div");
            let image =`https://memegenerator.net/img/images/${json.elapsedMS}.jpg`;
            meme.innerHTML = ` <img src= '${image}'>`;
            document.querySelector("body").appendChild(meme);
        })



}

}
let app2 = new meme('c8cf925-afd7-47c3-8762-6477731415f0');


// http://version1.api.memegenerator.net//MgImages_Search?q=insanity&apiKey=demo

//https://memegenerator.net/img/images/2623.jpg