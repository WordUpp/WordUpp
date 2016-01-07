var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('../models/Account');
var router = express.Router();

// configure passport
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
// end configuration for passport

router.get('/', function(req, res){
  res.render('account', { user: req.user});
});

//LOGIN//
router.get('/homepage', function(req, res){
  res.render('homepage', { user: req.user });
});

//LOGIN//
router.post('/homepage', passport.authenticate('local', { failureRedirect: '/homepage' }), function(req, res) {
  if (err) {
    res.render('homepage')
  }
  res.redirect('/account/wordoftheday');
});

// /* GET registration page. */
router.get('/registration', function(req, res){
  res.render('registration', { user: req.user });
});

//register/
router.post('/registration', function(req, res){
  console.log('1');
  console.log(req.body);
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
        console.log(':(');
        console.log(err);
         res.render('registration', { });
      }
      passport.authenticate('local')(req, res, function () {
        console.log(':)')
          res.redirect('homepage');
      });
  });

});

//logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/homepage');
});

module.exports = router;
