const express = require('express')
const router = express.Router()
const signUpTemplateCopy  = require('../models/SignupModels')
const Post = require('../models/Post');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response)=>{
  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(request.body.password, saltPassword)
  const signedUpUser = new signUpTemplateCopy({
    name: request.body.name,
    email: request.body.email,
    password: securePassword,
    bio: request.body.bio,
    jobtitle: request.body.jobtitle,
    tech: request.body.tech
  })
  signedUpUser.save()
  .then(data=>{
    response.json(data)
  })
  .catch(error=>{
    response.json(error)
  })
})


router.post('/post', async(request, response)=>{
  const posted = new Post({
    name: request.body.name,
    post: request.body.post
  })
  posted.save()
  .then(data=>{
    response.json(data)
  }).catch(error=>{
    response.json(error)
  })
})

module.exports = router