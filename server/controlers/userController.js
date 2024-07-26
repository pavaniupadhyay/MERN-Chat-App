const User=require("../models/userModel");
const bcrypt=require("bcrypt");


module.exports.register=async(req,res,next)=>{
  try{
const { username,email,password}=req.body;
const usernamecheck=await User.findOne({username});
if(usernamecheck)
  return res.status(400).json({error:"username already exists"});
  const emailChack =await User.findOne({email});
  if(emailChack)
    return res.status(400).json({error:"email already exists"});
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
      username,
      email,
      password:hashedPassword

    });
    delete user.password;
    res.status(200).json({user});
  }catch(ex){
    next(ex);
    
  }
};

