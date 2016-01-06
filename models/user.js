var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.Model('User', UserSchema);
