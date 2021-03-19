const express = require('express')
const router = express.Router()
const signUpTemplateCopy  = require('../models/SignupModels')

router.post('/singup', (request, response)=>{
  const signedUpUser = new signUpTemplateCopy({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    bio: request.body.bio,
    jobtitle: request.body.jobtitle,
    tech: request.body,tech
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