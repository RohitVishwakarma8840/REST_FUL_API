const express = require('express');
const bodyParser=require('body-parser');
const app=express();

const PORT=3000;

// Middleware for parsing the body so that we can read the data that we send through post type 
// request in that 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Middleware 
app.use(logger);
// you can say logger is a global Middleware 

// Mimic the database using the array 

let blogList=[];


function logger(req,res,next){
  console.log(req.url);
  console.log(req.body);

 let Condition = true;
  if(Condition){

   return res.status(500).json({
    message :"Something went wrong"
   })

  }
  next();

}

function isAuthenticated(req,res,next){
  console.log("user is Authenticated");
  next();

}

// app.get('/getall',(req,res)=>{
//     res.send(blogList);
// });

// Authenticated is a Middleware that is used when called by app.get unlinke app.get it will not 

app.get('/blogs',isAuthenticated , (req,res)=>{
    
   console.log("hitting");
    return res.status(404).json({
    data: blogList,
    success: true,
    id:req.params.id,
//    blogList:blogList,    

    });
});


app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    // console.log(req.query);
blogList.push({title :req.body.title,
     content: req.body.content,
     id:Math.floor(Math.random()*1000)
     
    });
return res.status(201).json({
    success: true,
})

});


app.get('/blogs/:id',(req,res)=>{
    // console.log(req.params);
 const result= blogList.filter((blog)=>blog.id ==req.params.id);
 return res.status(200).json({
    data : result,
    id: req.params.id,
    success : true
 })

})

// app.delete('/blogs/:id', (req, res) => {
//     const blogId = parseInt(req.params.id, 10);
//     // Find index of blog in array
//     const index = blogList.findIndex(b => b.id === blogId);
//     if (index !== -1) {
//         // Remove blog from array
//         blogList.splice(index, 1);
//         return res.status(200).json({
//             message: 'Blog deleted successfully',
//             success: true
//         });
//     } else {
//         return res.status(404).json({
//             message: 'Blog not found',
//             success: false
//         });
//     }
// });


app.listen(PORT,()=>{
    console.log("Server Started on PORT", PORT);
});