
const mongoose=require("mongoose");

const connectToDB=async()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017");
        console.log("MongoDB connected");

    }catch(err){
        console.error("MongoDB is not connected");
    }

}


module.exports=connectToDB;