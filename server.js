const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = require('./app');

//database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log('Successfully connected to Database'.blue.italic.bold);
});

//server
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Tour management system server is running on port ${port}`.green.bgWhite.bold)
})