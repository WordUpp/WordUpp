var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');
var router = express.Router();

// configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// end configuration for passport

router.get('/userhome', function(req, res){
  res.render('userhome', { user: req.user });
});


router.post('/userhome', passport.authenticate('local', { failureRedirect: '/homepage' }), function(req, res) {
  res.redirect('/userhome');
});

router.get('/registration', function(req, res){
  res.render('registration', { user: req.user });
});

router.post('/registration', function(req, res){
  console.log('1');
  console.log(req.body);
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
        console.log(':(');
        console.log(err);
         res.render('registration', { });
      }
      passport.authenticate('local')(req, res, function () {
        console.log(':)')
          res.redirect('/homepage');
      });
  });

});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/homepage');
});

module.exports = router;
