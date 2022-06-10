const express = require("express");

const router = express.Router();

const Admin = require('../models/admins.model');

//get all admins
router.get("/", async (req,res)=>{
    try{
        const admins = await Admin.find().lean().exec();
        
        return res.status(200).json({admins});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})

//create new admin
router.post("/",async (req,res)=>{
    try{
        const admin = await Admin.create(req.body);
        
        return res.status(201).json({admin});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})


//update an admin data
router.patch('/:id', async (req,res)=>{
    try{
        const admin = await Admin.findByIdAndUpdate(req.params.id,req.body,{new:true});
        
        return res.status(201).json({admin});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})


//delete an admin 
router.delete('/:id', async (req,res)=>{
    try{
        const admin = await Admin.findByIdAndDelete(req.params.id).lean().exec();
        
        return res.status(200).json({admin});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})


module.exports = router;

