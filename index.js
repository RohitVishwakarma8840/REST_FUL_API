const express = require('express');
const app=express();

const PORT=3000;


// Mimic the database using the array 

let blogList=[];

app.get('/blogs',(req,res)=>{

    return res.status(200).json({
    data: blogList,
    success: true
    });
});

app.listen(PORT,()=>{
    console.log("Server Started on PORT", PORT);
});