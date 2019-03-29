var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// contact leggen met controllers
let messageController = require("../controllers/message")

// GET: Message
router.get('/messages', messageController.get);

// POST: Message
router.post('/messages', messageController.post);