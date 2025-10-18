

 const jwt=require("jsonwebtoken");

 const authMiddleware=(req,res,next)=>{

    const token=req.header.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({msg:"No token provided"});

    }

    try{

    
        const decoded=jwt.verify(token,"masaiSecret");
        req.user=decoded;
        next();

    } catch(err){

        res.status(401).json({msg:"Invalid token"})

    }
 }

 module.exports=authMiddleware;