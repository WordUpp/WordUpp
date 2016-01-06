var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/homepage', function(req, res, next) {
data.user = req.user;
res.render('homepage', {'content-type': 'text/html'});
});

/* GET registration page. */
router.get('/registration', function(req, res, next) {
  res.render('registration', {'content-type': 'text/html'});
});

/* GET dictionary(search results) page. */
router.get('/dictionary', function(req, res, next) {
  res.render('dictionary', {'content-type': 'text/html'});
});


module.exports = router;
