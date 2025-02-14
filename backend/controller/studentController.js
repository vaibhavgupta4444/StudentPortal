import studentModel from "../models/studentModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// user login route
const studentLogin=async(req,res)=>{
    try {

        const {email,password}=req.body;
        const student=await studentModel.findOne({email});

        if(!student){
            return res.json({success:false,message:'user does not exist'});
        }

        const isMatch=await bcrypt.compare(password,student.password);

        if(isMatch){
            const token=createToken(student._id);
            res.json({success:true,token});
        }
        else{
            res.json({success:false,message:'Invalid Password'});
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }

}

// user registration route
const studentRegistration=async(req,res)=>{
    try {
        const {name,email,mobile,city,country,password}=req.body;

        //checking student already exist or not
        const exists=await studentModel.findOne({email});

        if(exists){
            return res.json({success:false,message:"Email already used"});
        }
        // checking email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Email is not valid"});
        }

        if(mobile.length<10){
            return res.json({success:false,message:"Mobile number is not valid"});
        }

        if(password.length<8){
            return res.json({success:false,message:"Enter Strong password"});
        }

        // hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);

         const newStudent=new studentModel({
            name,email,mobile,city,country,
            password:hashedPassword
         })

         const student=await newStudent.save();
         const token = createToken(student._id);

         res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

const studentDetail=async(req,res)=>{

    const {studentId} =req.body;
    const response=await studentModel.findOne({_id:studentId});
    const student={
        name:response.name,
        mobile:response.mobile,
        email:response.email,
        city:response.city,
        country:response.country
    }
    res.json({success:true,student});

}

export {studentLogin,studentRegistration,studentDetail}