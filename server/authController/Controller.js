const User = require('../models/SignupModels');
const jwt = require('jsonwebtoken');
const maxAge = 5*24*60*60
const createJWT = id =>{
  return jwt.sign({id}, 'chatroom secret',{
    expiresIn: maxAge
  })
} 



module.exports.login = async (req,res)=>{
  const {email,password} = req.body;
  try{
   const user = await User.login(email,password)
   const token  = createJWT(user._id);
   res.cookie('jwt', token,{ httpOnly:true, maxAge: maxAge*1000 }) 
   res.status(201).json({user});
  }catch(error){
   let errors =  alertError(error);
    res.status(400).json({ errors });
  }
}
module.exports.verifyuser = (req,res,next)=>{
  const token = req.cookies.jwt;
  if(token){
    jwt.verify(token,'chatroom secret', async(err,decodedToken)=>{
      console.log('decoded Token', decodedToken)
      if(err){
        console.log(err)
      }
      else{
        let user = await User.findById(decodedToken.id)
        res.json(user);
        next();
      }
    })
  }else{
    next();
  }
}
module.exports.logout = (req,res)=>{
  res.cookie('jwt',"",{maxAge:1});
  res.status(200).json({logout: true})
}
