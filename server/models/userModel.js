const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema=new Schema({
  username:{
    type:String,
    require:true,
    unique:true,
    min:3,
    max:20
  },
  email:{
    type:String,
    require:true,
    unique:true,
    max:50,

  },
  password:{
    type:String,
    require:true,
    min:8,
  },
  isAvatarImageSet:{
   type:Boolean,
   default:false

  },
  avatarImage:{
    type:String,
    default:""
    }

});
module.exports=mongoose.model("Users",userSchema);
