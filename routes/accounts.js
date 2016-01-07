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
router.post('/homepage', passport.authenticate('local', { failureRedirect: '/homepage' }),
  function(req, res) {
    res.redirect('/');
  }
);

// /* GET registration page. */
router.get('/registration', function(req, res){
  res.render('registration', { user: req.user });
});

//register/
router.post('/registration', function(req, res){
  console.log('1');
  console.log(req.body);
  Account.registration(new Account({ username : req.body.username }),
  req.body.password,
  function(err, account) {
      if (err) {
        console.log(':(');
        console.log(err);
         res.render('registration', { });
      }
      passport.authenticate('local')(req, res, function () {
        console.log(':)')
          res.redirect('wordoftheday');
      });
  });

});

//logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/homepage');
});

module.exports = router;
