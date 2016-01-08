var mongoose = require ('mongoose');
var connectionString = 'mongodb://localhost/wordupp' || MONGOLAB_URI;

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('it\'s wordupp time!');
});

mongoose.connection.on('error', function() {
  console.log(error);
});

mongoose.connection.on('disconnected', function() {
  console.log('ta-ta words!');
});

//mongoimport --db wordupp --collection words --drop --file word.json --jsonArray
