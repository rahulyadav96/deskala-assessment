const Admin = require('../models/admins.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY;

// funtion to generate a token
const createToken = (admin)=>{

    return jwt.sign({id:admin.id}, JWT_SECRETE_KEY);
}

//signup controller
const signUp = async(req,res)=>{

    try{
        var admin;

        //find the admin by email to check does admin already registered or not
        admin = await Admin.findOne({email:req.body.email}).lean().exec();
       
        //if admin exist , return 
        if(admin)  return res.status(401).json({status:'failed',message:'This email already registered, try with another one.'}); 

        //if not then create new admin
        admin = await Admin.create(req.body);

        //generate a token
        const token = createToken(admin);

        //send response
        return res.status(201).json({token, admin});


    }catch(err){

        return res.status(500).json({status:"fail", message:"somthing went wrong"});
    }
}

// Login controller

const login = async(req,res)=>{

    try{

        var admin;

        //check, does admin exist or not by entered email
        admin = await Admin.findOne({email:req.body.email}).exec();
        
        //if admin not exist return 
        if(!admin) return res.status(401).json({status:'failed', message:'Sorry, you are not registred.'}); 

        
        //if admin exist then match password
        const matchPassword =await admin.verifyPassword(req.body.password);
        //if not matched, return 
        if(!matchPassword) return res.status(401).json({status:"failed", message:"Wrong password. Please check your password"});

        //if matched, then generate token
        const token = createToken(admin);

        //return response
        return res.status(200).json({token, admin});


    }catch(err){
            console.log(err)
        return res.status(500).json({status:"fail", message:"Something went wrong"});
    }
}

module.exports = {signUp, login};