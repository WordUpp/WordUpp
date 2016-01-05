var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

module.exports = mongoose.Model('User', UserSchema);
