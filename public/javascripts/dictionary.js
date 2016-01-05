//search function using Merriam API
//this is sudo code until we figure out our views stuff!

$(document).ready(function(){
  var dictionary = $.ajax(getDictionary);
});

var getDictionary = {
  type: 'get',
  url: 'http://www.dictionaryapi.com/api/v1/references/learners/xml/test?key=ef540564-0cc2-4f6a-817f-1a18effca8e6'
  data: 'json',
  success: function(data) {
    console.log('Whoop whoop');
    console.dir(data);
    $('.dictionary').append('<li>Word:'+ data.name + '</li>')
  },
  error: function() {
    console.log("not working");
  }
}
