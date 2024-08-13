const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: false,
  },
    lastname:{
      type: String,
      required: false
    },
    image:{
      type:String,
      required:false
    },
    color:{
      type:Number,
      required:false
    },
    profilesetup:{
      type:Boolean,
      required:false
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;