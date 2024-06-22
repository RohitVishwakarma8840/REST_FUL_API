const express = require('express');
const app=express();

const PORT=3000;

app.get('/user',(req,res)=>{
    res.send("hello world by rohit");
});

app.listen(PORT,()=>{
    console.log("Server Started on PORT", PORT);
});