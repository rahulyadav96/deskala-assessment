const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const adminSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    phone_no:{type:Number, required:true},
    password:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})

//hash password before saving data
adminSchema.pre('save', function(next){

    //check if the password is modified or not
    //if not modified return next

    if(this.isModified('password')) return next();

    //if modified than  hash it before saving
    bcrypt.hash(this.password,8,(err,hashed)=>{

        //if  error return next with err
        if(err) return next(err);


        //else assign passwrod with hashed password
        this.password = hashed;

        next();

    })


})

//method for verify admin while login

adminSchema.methods.verifyPassword = function(enterdPassord){

    //get hashedpassword 
    const hashedPassword = this.password

    //compare the password
    return new Promise((resolve,reject)=>{

        bcrypt.compare(enterdPassord,hashedPassword,(err,matched)=>{

            //if error reject the promise
            if(err) reject(err)
            
            // else resolve 
            resolve(matched);


        })
    })
}

//create  admin model
const Admin = mongoose.model('admin',adminSchema);


module.exports = Admin;