const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    name:{type:String, required:true},
    dob:{type:String, required:true},
    age:{type:Number, required:true},
    state:{type:String, required:true},
    pincode:{type:String, required:true},
    address:{type:String, required:true},
   
},{ 
    versionKey:false,
    timestamps:true
})


const Candidate = mongoose.model("candidate", candidateSchema);

module.exports = Candidate;

