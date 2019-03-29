// mongoose schema aanmaken

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let messageSchema =new Schema({
    text:  String,
    user: String,
   
});

let message = mongoose.model("Message", messageSchema);

module.exports = message;