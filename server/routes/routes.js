const express = require('express')
const router = express.Router()
const signUpTemplateCopy  = require('../models/SignupModels')
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

module.exports = router