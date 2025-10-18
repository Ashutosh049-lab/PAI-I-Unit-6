

const mongoose=require("mongoose");

const movieSchema=new mongoose.Schema({

    title:{type:String,required:true,unique:true},
    genre:String,
    releaseYear:Number,
    director:String,
    averageRating:{type:Number,default:0}
})

const Movie=mongoose.model("Movie",movieSchema);

module.exports=Movie;