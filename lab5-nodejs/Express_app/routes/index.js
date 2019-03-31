var express = require('express');
var router = express.Router();
let messageController = require("../controllers/message")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 5: Express app'});
  
});
module.exports = router;

// GET
router.get('/api/v1/messages', messageController.get);

// GETID
router.get('/api/v1/messages/:id', messageController.getid);

// POST
router.post('/api/v1/messages', messageController.post);

//PUT
router.put('/api/v1/messages/:id', messageController.put);

//DELETE
router.delete('/api/v1/messages/:id', messageController.remove);

//GET-USERNAME
router.get('/api/v1/messages?user=username',messageController.getUsername);
