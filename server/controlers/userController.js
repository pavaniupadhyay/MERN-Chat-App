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
module.exports.login=async(req,res,next)=>{
  try{
const { username,password}=req.body;
const user=await User.findOne({username});
if(!user)
  return res.status(400).json({error:"incorrect username or password"});
const isValidPassword=await bcrypt.compare(password,user.password);
if(!isValidPassword)
  return res.status(400).json({error:"incorrect username or password"});
delete user.password;
  return  res.status(200).json({user});
  }catch(ex){
    next(ex);
  }
};
module.exports.setAvatar=async(req,res,next)=>{
  try{
const userId=req.params.id;
const avatarImage=req.body.image;
const userData=await User.findByIdAndUpdate(
  userId,
  {
  isAvatarImageSet:true,
  avatarImage,
}
);

return res.json({
  isSet: userData.isAvatarImageSet,
  image: userData.avatarImage,
});
  }catch(ex){
    next(ex);
  }
};
module.exports.getAllUsers=async(req,res,next)=>{
  try{
    const users=await User.find({_id:{$ne:  req.params.id}}).select([
      "username",
      "email",
      "avatarImage",
      "_id"
    ]);
    return res.json(users);
  }catch(ex){
    next(ex);
  }
};
