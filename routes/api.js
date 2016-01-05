var express = require('express');
var router = express.Router();
var model = require('../models/word');

/* GET api listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, words) {
    res.json(words);
  });
});

module.exports = router;
