$( document ).ready(function() {
    console.log( "ready!" );
//return random word onto word of the day page after logging in
$.ajax({
      type: 'GET',
      url: '/word',
      success: function(wod) {
        var index = Number.parseInt(Math.random()*wod.length)
        $('#wod').append(wod[index].Word);
        $('#type').append(wod[index].Word_type);
        $('#sound').append(wod[index].Pronunciation);
        $('#example').append(wod[index].Sentence);
        $('#origin').append(wod[index].Origin);
      }
    });

//search function
    // router.get('/search/:term', function(req, res){
    //   model.find({Word: req.params.term}, function(err, word){
    //   if (err){
    //     res.send(err);
    //   } else {
    //     res.json(word);
    //   }
    // });
    // });
  });
