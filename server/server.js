require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose');
const URL=process.env.db;
const PORT=process.env.port || 8000;
const dbName=process.env.dbName;


const app=express()

mongoose.connect(URL,{dbName:dbName})
.then(()=>{
    app.listen(PORT,()=>{console.log("connected to database and server started at `http://localhost:${8000}`")})
}).catch((err)=>{
    console.log("not connected to database Error!",err);
})