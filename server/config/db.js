const mongoose = require("mongoose");
require('dotenv').config();

//get database password
const DB_PASSWORD = process.env.DB_PASSWORD;

//make a db connection function
const connect = ()=>{

    return mongoose.connect(`mongodb+srv://rahulyadav:${DB_PASSWORD}@cluster0.pf3yr.mongodb.net/deskala?retryWrites=true&w=majority`);
}

//export connect
module.exports = connect;
