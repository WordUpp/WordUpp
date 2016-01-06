//search function using Merriam API
//this is sudo code until we figure out our views stuff!


// var app = app || {};
// var active = active || {};


$(document).ready(function(){
$.ajax(getDictionary);
});

var getDictionary = {
  type: 'get',
  url:'http://www.dictionaryapi.com/api/v1/references/learners/xml/test?key=ef540564-0cc2-4f6a-817f-1a18effca8e6',
  crossDomain: true,
  dataType: "xml",
  Origin: "http://localhost:3000/registration",
  xhrFields: {
    withCredentials: true
  },
  success: function(data) {
    console.log('Whoop whoop');
    console.log(data);
    // $('.dictionary').append('<li>'+ data[i][key] + '</li>')
  },
  error: function() {
    console.log("not working");
  }
}
