var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({message:'This is hello world!!'});
});

module.exports = router;
