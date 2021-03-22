const mongoose = require('mongoose')

const Post = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  post:{
    type: String,
    required: true
  },
  domain:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post',Post);