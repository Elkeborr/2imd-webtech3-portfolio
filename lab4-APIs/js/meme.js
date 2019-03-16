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

     /*   let q; 
        let wheater=document.getElementsByTagName('h1').value;
        console.log (wheater);
if (wheater === "Drizzle"){
    q = "ugly";
}else if (wheater === "Mostly Cloudy"){
    q = "happy";
}else {
    q="help";
}
console.log (q);*/

        let urlmeme = `https://cors-anywhere.herokuapp.com/http://version1.api.memegenerator.net//MgImages_Search?${q}&${this.API_KEY2}`;
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