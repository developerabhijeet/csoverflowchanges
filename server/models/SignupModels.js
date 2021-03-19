const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true,
    minlength:6  
  },
  bio:{
    type: String,
    required: true
  },
  jobtitle:{
    type: String,
    required: true
  },
  tech:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('usertable',signUpTemplate)