var mongoose = require('mongoose');

var WordSchema = new mongoose.Schema({
  word: String,
  word_type: String,
  pronunciation: String,
  sentence: String,
  Origin: String
});

module.exports = mongoose.Model('Word', WordSchema);
