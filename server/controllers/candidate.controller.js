const express = require("express");

const router = express.Router();
const Candidate = require("../models/candidates.model");

//get all candiates
router.get("/", async (req,res)=>{
    try{
        const candidates = await Candidate.find().lean().exec();
        
        return res.status(200).json({candidates});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})

//add new candidate
router.post("/",async (req,res)=>{
    try{
        const candidate = await Candidate.create(req.body);
        
        return res.status(201).json({candidate});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})


//edit a candidate data
router.patch('/:id', async (req,res)=>{
    try{
        const candidate = await Candidate.findByIdAndUpdate(req.params.id,req.body,{new:true});
        
        return res.status(201).json({candidate});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})


//delete a candidate
router.delete('/:id', async (req,res)=>{
    try{
        const candidate = await Candidate.findByIdAndDelete(req.params.id).lean().exec();
        
        return res.status(200).json({candidate});
    }catch(err){

        res.status(500).json({status:'failed', message:'oops something went wrong'});
    }
})

module.exports = router;