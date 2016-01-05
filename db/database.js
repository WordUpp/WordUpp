var mongoose = require('mongoose');
var connectionString= 'mongodb://localhost/wordupp';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log("Up and Running!");
  });

mongoose.connection.on('error', function
  console.log('')

////JEN FINISH THIS 
