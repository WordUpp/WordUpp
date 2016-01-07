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
//
// router.get('/homepage', function(req, res){
//   res.render('userhome', { user: req.user });
// });


router.post('/homepage', passport.authenticate('local', { failureRedirect: '/homepage' }), function(req, res) {
  if (err) {
    res.render('registration')
  }
  res.redirect('/user/userhome');
});

router.get('/registration', function(req, res){
  res.render('registration', { user: req.user });
});

router.post('/registration', function(req, res){
  // console.log('1');
  // console.log('we got an error');
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
        console.log(':(');
        console.log(err);
         res.render('/registration', { user : user });
      }
      passport.authenticate('local')(req, res, function () {
        console.log(':)')
          res.redirect('/user/userhome');
      });
  });

});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/homepage');
});

module.exports = router;
