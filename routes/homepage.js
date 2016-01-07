var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('layout', { 'layout': 'layout' })
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
res.render('homepage', {'content-type': 'text/html'});
});
// var data = siteData;
// data.user = req.user;
// res.render('homepage', data);

/* GET registration page. */
router.get('/registration', function(req, res, next) {
res.render('registration', {'content-type': 'text/html'});
});

/* GET dictionary(search results) page. */
router.get('/dictionary', function(req, res, next) {
  res.render('dictionary', {'content-type': 'text/html'});
});


module.exports = router;
