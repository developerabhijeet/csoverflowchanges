const express = require('express')
const router = express.Router()
const User = require('../models/SignupModels')
const Post = require('../models/Post');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const maxAge = 5 * 24 * 60 * 60
const createJWT = id => {
  return jwt.sign({ id }, 'chatroom secret', {
    expiresIn: maxAge
  })
}
router.post('/signup', async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(request.body.password, saltPassword)
  const signedUpUser = new User({
    name: request.body.name,
    email: request.body.email,
    password: securePassword,
    bio: request.body.bio,
    jobtitle: request.body.jobtitle,
    tech: request.body.tech
  })
  signedUpUser.save()
    .then(data => {
      response.json(data)
    })
    .catch(error => {
      response.json(error)
    })
})


router.post('/post', async (request, response) => {
  const posted = new Post({
    name: request.body.name,
    post: request.body.post,
    domain: request.body.domain

  })
  posted.save()
    .then(data => {
      response.json(data)
    }).catch(error => {
      response.json(error)
    })
})


router.route('/').get((req, res) => {
  Post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/user').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




router.route('/post/:id').get(function(req, res) {
  let id = req.params.id;
  try{
  Post.findById(id, function(err, data) {
      res.json(data);
      console.log(data);
  });
}catch(err){
  console.log(err)
}

});


const alertError = (err) => {
  console.log('error.message', err.message);
  console.log('error.message', err.code);
  let errors = { name: '', email: '', password: '', profession: '' }
  if (err.message === 'incorrect email') {
    errors.email = 'thi email not found';
  }
  if (err.message === 'incorrect pwd') {
    errors.password = 'The password is incorrect';
  }
  if (err.code === 11000) {
    errors.email = 'This email already exist';
    return errors;
  }
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message

    });
  } return errors;
}


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password)
    const token = createJWT(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(201).json({ user });
  } catch (error) {
    let errors = alertError(error);
    res.status(400).json({ errors });
  }
})

router.get('/verifyuser', async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'chatroom secret', async (err, decodedToken) => {
      console.log('decoded Token', decodedToken)
      if (err) {
        console.log(err)
      }
      else {
        let user = await User.findById(decodedToken.id)
        res.json(user);
        next();
      }
    })
  } else {
    next();
  }
})
router.get('/logout', (req, res) => {
  res.cookie('jwt', "", { maxAge: 1 });
  res.status(200).json({ logout: true })
})


module.exports = router