
const express=require("express");
const connectToDB=require("./config/db");

const app=express();
app.use(express.json());

connectToDB();

app.get("/test",(req,res)=>{
    res.send("movie review ");
})


const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);

})