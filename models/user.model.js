
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const { useReducer } = require("react");


const userSchema=new mongoose.Schema({
    name:{
        Type:String,required:true
    },

    email:{
        type:String,required:true,unique:true
    },

    password:{type:String,required:true},

})


userSchema.pre("save",async function name(next){

    if(!this.ismodified("password")){
        return next();
    }

    this.password=await bcrypt.hash(this.password,10);
    next();
})


const User=mongoose.model("User",userSchema);

module.exports=User;