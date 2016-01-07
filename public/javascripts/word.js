function Vocabulary(word, wordType, pronunciation, sentence, Origin) {
    this.word = word;
    this.wordType = wordType;
    this.pronunciation = pronunciation;
    this.sentence = sentence;
    this.Origin = Origin;
    this.toJsonString = function () { return JSON.stringify(this); };

};
// create
function addVocabulary (vocabulary) {

     jQuery.ajax({
         type: "ADD",
         url: "http://localhost:3000/word.json/Add",
         data: vocabulary.toJsonString(),
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (data, status, jqXHR) {
              // do something
         },

         error: function (jqXHR, status) {
              // error handler
         }

     });
}
// Read
function getVocabulary () {

     jQuery.ajax({
         type: "GET",
         url: "http://localhost:3000/word.json/GetAll",
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (data, status, jqXHR) {
             // do something
         },

         error: function (jqXHR, status) {
             // error handler
         }
}
// update
function updateContact (contact) {

     jQuery.ajax({
         type: "PUT",
         url: "http://localhost:3000/word.json/Update",
         contentType: "application/json; charset=utf-8",
         data: contact.toJsonString(),
         dataType: "json",
         success: function (data, status, jqXHR) {
             // do something
         },

         error: function (jqXHR, status) {
             // error handler

         }
     });
}

// destroy
function deleteContact (contactId) {

     jQuery.ajax({
         type: "DELETE",
         url: "hhttp://localhost:3000/word.json/Delete",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(contactId),
         dataType: "json",
         success: function (data, status, jqXHR) {
             // do something
         },

         error: function (jqXHR, status) {
             // error handler
         }
     });
});




//
//
//
//
// var animal = $("#animalName").val();
//    var sound = $("#animalSound").val();
//
//    // alert(animal);
//
//    $.ajax({
//      url: 'http://localhost:8000/animals',
//      type: 'POST',
//      dataType: 'json',
//      data: {"animal":
//      {"name": animal,
//      "sound": sound}
//    }})



// var ajaxArgument = {
//     type: 'get',
//     url: 'http://localhost:3000/word',
//     dataType: 'json',
//     success: function(data) {
//         console.log("success");
//         console.log(data);
//     },
//     error: function(error) {
//         console.log("error")
//         console.log(error);
//     }
// };
// // make the ajax call
// $.ajax(ajaxArgument);
