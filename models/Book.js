var mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
  isBn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_Date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Book', BookSchema)
