/*class meme{

    constructor(API_KEY){
        // in gang zetten van de app 
        this.API_KEY = API_KEY;
        console.log("jow2");
        this.initialize();
    }

    initialize(){
        this.getMeme();
        
    }

    getMeme(){
       // http://version1.api.memegenerator.net//MgImages_Search?q=insanity&apiKey=demo
        let urlmeme = `https://cors-anywhere.herokuapp.com/http://version1.api.memegenerator.net//MgImages_Search?q=insanity&apiKey=demo`;
        console.log(urlmeme);

        fetch(urlmeme)
        .then(response =>{
            return response.json();
        })
        .then(json=>{
            console.log(json);
            let meme = document.createElement("img");
            //meme.innerHTML = json.currently.summary;
            document.querySelector("body").appendChild(meme);
        })



}

}

let app2 = new meme('c8cf925-afd7-47c3-8762-6477731415f0');*/

