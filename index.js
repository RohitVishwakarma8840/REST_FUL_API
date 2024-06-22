const express = require('express');
const bodyParser=require('body-parser');
const app=express();

const PORT=3000;

// Middleware for parsing the body so that we can read the data that we send through post type 
// request in that 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Mimic the database using the array 

let blogList=[];

app.get('/blogs',(req,res)=>{

    return res.status(200).json({
    data: blogList,
    success: true,
    });
});


app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    // console.log(req.query);
blogList.push({title :req.body.title, content: req.body.content});
return res.status(201).json({
    success: true,
})

});

app.listen(PORT,()=>{
    console.log("Server Started on PORT", PORT);
});