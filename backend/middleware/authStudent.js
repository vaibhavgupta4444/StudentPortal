import jwt from "jsonwebtoken";

const authStudent=async(req,res,next)=>{

    const {token} =req.headers;

    if(!token){
        return res.json({success:false,message:'Not Authorized Login Again'});
    }

    try {
        
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.studentId=token_decode.id;
        next();

    } catch (error) {
        res.json({success:false,message:error.message});
    }

}

export default authStudent;