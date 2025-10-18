
const express=require("express");
const connectToDB=require("./config/db");
const cors=require("cors");
const dotenv=require("dotenv");
const loggerMiddleware = require("./middleware/logger.middleware");
const userRoutes=require("./Routes/user.routes")
const movieRoutes=require("./Routes/movie.routes")
const reviewRoutes=require("./Routes/review.routes")

const app=express();
app.use(express.json());

connectToDB();
app.use(loggerMiddleware);
app.use("/user",userRoutes);

app.use("/movies",movieRoutes);
app.use("/reviews",reviewRoutes);

app.get("/test",(req,res)=>{
    res.send("movie review ");
})


const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);

})