
// contact leggen met models => message
const message = require('../models/message');

// GET
let get = ('/messages',(req,res,next)=>{
  
    message.find({},(err, docs)=>{
    res.json({
      "status": "YES 🤯",
      "data": {
        "messages": docs
      }
    })
    });
    
    });

module.exports.get=get;

// GET:ID


let getid = ('/messages/:id',(req,res,next)=>{


  message.find({},(err, docs)=>{

  res.json({
    "status": "YES 🤯",
    
      "messages": "_id"
    
  })
  });
  
  });

module.exports.getid=getid;

// POST
let post = ('/messages',(req,res,next)=>{
    // variabele maken van de user en de tekst dat gestuurd worden
    let text = req.body.text;
    let user = req.body.user;
    console.log(text);
    
    // deze in een nieuwe message zette
    let m =new message();
    m.text =text;
    m.user = user;
    m.save();
    
    res.json ({
      "status":"YES ✉️",
      "data":{
        "message": m
      }
    })
    });

module.exports.post=post;

//PUT

let put =('/messages/:id',(req,res)=>{

let nieuw_text = req.body.text;
let user = req.body.user;

    message.findOneAndUpdate(
        { "user" : req.body.user},
        { $set : { "text" : nieuw_text },
        }
    )

    res.json ({
      "status":"YES 📤",
      "data":{
        "message":"help"
      }
    })
   
});
module.exports.put=put;

//DELETE

let remove =('/messages/:id',(req,res)=>{

  message.findOneAndDelete(
    { "_id" : "" }
 )

  res.json ({
    "status": "success", 
    "message": "The message was removed"
  });


    
});
module.exports.remove=remove;