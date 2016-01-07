var express = require('express');
var router = express.Router();
var model = require('../models/Word');

//GET words
router.get('/', function(req, res, next) {
  model.find(function(err, words) {
    if (err) {
      res.send(err);
    } else {
      res.json(words);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, word) {
    if (err) {
      res.send(err);
    } else {
      res.json(word);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, word){
    if (err) {
      res.send(err);
    } else {
      res.json(word);
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, word) {
    if (err) {
      res.send(err);
    } else {
      res.json(word);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, word) {
    if (err) {
      res.send(err);
    } else {
      res.json(word);
    }
  });
});

router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, word) {
    if (err) {
      res.send(err);
    } else {
      res.json(word);
    }
  });
});



module.exports = router;
