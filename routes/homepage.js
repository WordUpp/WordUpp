var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('layout', { 'layout': 'layout' })
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
res.render('homepage', {'content-type': 'text/html'});
});
var data = siteData;
data.user = req.user;
res.render('homepage', data);



module.exports = router;
