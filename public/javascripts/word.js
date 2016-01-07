$( document ).ready(function() {
    console.log( "ready!" );

$.ajax({
      type: 'GET',
      url: '/word',
      success: function(wod) {
        // $.each(wod, function(i, wod) {
        //   $wod.append($('body'));
        // });
        var index = Number.parseInt(Math.random()*wod.length)
        $('body').append(wod[index].Word);
        $('#type').append(wod[index].Word_type);
        $('#sound').append(wod[index].Pronunciation);
        $('#example').append(wod[index].Sentence);
        $('#origin').append(wod[index].Origin);
      }
    });
  });
