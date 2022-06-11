const express = require("express");
require('dotenv').config();

//import database connect
const connect = require("./config/db");

//controllers
const adminController = require("./controllers/admin.controller");
const candidateController = require('./controllers/candidate.controller');
const {signUp, login} = require('./controllers/auth.controller'); 

//create server app
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

//routes
app.use('/admins', adminController);
app.use('/candidates', candidateController);
app.use('/signup', signUp);
app.use('/login', login);


//server will run on given port nunmber
app.listen(PORT, async()=>{
    try{

        //establise database connection
        await connect();
        console.log(`server is running on port no: ${PORT}`);
    }catch(err){
        console.error(err);
    }
})
