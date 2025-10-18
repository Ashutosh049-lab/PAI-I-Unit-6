
const mongoose=require("mongoose");
const Movie=require("./movie.model");
const User=require("./user.model");

const reviewSchema= new mongoose.Schema({
    
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    movie:{type:mongoose.Schema.Types.ObjectId,ref:"Movie",required:true},
    rating:{type:Number,required:true,min:1,max:5},
    comment:String

})


 