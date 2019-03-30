var express = require('express');
var router = express.Router();
let messageController = require("../controllers/message")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , linktext:'Messages'});
  
});
module.exports = router;

// GET
router.get('/', messageController.get);

// GETID
router.get('/api/v1/messages', messageController.getid);

// POST
router.post('/api/v1/messages', messageController.post);

//PUT
router.put('/api/v1/messages/:id', messageController.put);



