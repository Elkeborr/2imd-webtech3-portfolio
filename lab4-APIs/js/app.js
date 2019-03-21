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
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div1.classList.add("today");
            div1.classList.add("tomorrow");
            
         
            let temp = document.createElement("h1");
            let p = document.createElement ("p");
            

           
            temp.innerHTML = "Today:  " +json.currently.summary;
            p.innerHTML = "Temperature:  " + json.currently.temperature + " &degc" ;

            let tomorrow = document.createElement("h1");
            let p2 = document.createElement ("p");
            tomorrow.innerHTML = "Tomorrow:  " +json.daily.data[1].summary + "<br>" ;
            p2.innerHTML = "Max temperature:  " + json.daily.data[1].temperatureHigh + " &degc" + "<br>"
            + "Min temperature:  " + json.daily.data[1].temperatureLow+ " &degc" ;
           
            console.log(p);
            document.querySelector("body").appendChild(div1);
            document.querySelector("body").appendChild(div2);

            div1.appendChild(temp);
            div1.appendChild(p);

            div2.appendChild(tomorrow);
            div2.appendChild(p2);
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
        let q ='cat'; 
        let tekst= document.getElementsByTagName('h1');
    
        if (tekst === 'Mostly Cloudy'){
            q = 'clouds';
       

        }else if(tekst === 'Rain'){
            q = 'sad';
         
        }else if(tekst === 'Sunny'){
            q = 'happy';
           
        }
        console.log(q);
        console.log(tekst);

let urlmeme = `https://cors-anywhere.herokuapp.com/http://version1.api.memegenerator.net//Generators_Search?q=${q}&pageIndex=0&pageSize=12&apiKey=${this.API_KEY2}`;

        
/* urlmeme geeft een array terug in json met daarin een nummer die dan in de img geplakt moet worden*/

fetch(urlmeme)
        .then(response =>{
            return response.json();
        })
        .then(json=>{
            console.log(json);
            let meme = document.createElement("div");
            let imageID = (json.result[2]["imageID"]);
            let image =`https://memegenerator.net/img/images/${imageID}.jpg`;
            
            meme.innerHTML = ` <img src= '${image}'>`;
            document.querySelector("body").appendChild(meme);
        })



}

}
let app2 = new meme('fc8cf925-afd7-47c3-8762-6477731415f0');

// http://version1.api.memegenerator.net//MgImages_Search?q=insanity&apiKey=demo

//https://memegenerator.net/img/images/2623.jpg


