const express = require("express");
//import database connect
const connect = require("./config/db");
require('dotenv').config();
//create server app
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;


app.listen(PORT, async()=>{
    try{

        await connect();
        console.log(`server is running on port no: ${PORT}`);
    }catch(err){
        console.error(err);
    }
})
