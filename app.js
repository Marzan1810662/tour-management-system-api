const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//root api
app.get('/',(req,res,next) => {
     res.send('Welcome to Tour Management System')
});

module.exports=app;