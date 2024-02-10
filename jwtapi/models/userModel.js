const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    name:{type:String,reuired:true},
    email:{type:String,reuired:true},
    mobile:{type:String,reuired:true},
    password:{type:String,reuired:true},
    image:{type:String,reuired:true},
    is_verified:{type:Number,default:0}, // 1:verified

});

module.exports=mongoose.model("User",userSchema);

