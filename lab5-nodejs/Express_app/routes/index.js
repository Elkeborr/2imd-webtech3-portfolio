var express = require('express');
var router = express.Router();
let messageController = require("../controllers/message")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// GET
router.get('/api/v1/messages', messageController.get);

// POST
router.post('/api/v1/messages', messageController.post);

//PUT
router.put('/api/v1/messages', messageController.put);