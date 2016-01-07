var express = require('express');
var router = express.Router();

var siteData = {
  title: 'Wordupp API',
  version: '1.0.0',
  authors: 'WDI students',
  date: 'Jan. 5, 2015'
};

router.get('/', function(req, res){
  res.render('layout', { 'layout': 'layout' })
})
/* GET home page. */
router.get('/homepage', function(req, res, next) {
var data = siteData;
data.user = req.user;
res.render('homepage', data);
res.render('homepage', {'content-type': 'text/html'});
});

router.get('/wordoftheday', function(req, res, next) {
  res.render('wordoftheday', { title: 'Stuff', message: "Hi friends. Let's send some data to Express using Ajax!" });
});

module.exports = router;
