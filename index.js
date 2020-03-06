const express=require('express');
const app=express();
const port=800;
const cookieparser=require('cookie-parser');


const router=require('./routes/users');
const sassmiddleware=require('node-sass-middleware');

 
app.use(sassmiddleware({

    src:'./asset/scss',
    dest:'./asset/css',
    debug:true,
    outputStyle:'extends',
    prefix:'/css'

  
 }));
 
var path = require('path');



 //app.get('/',require('./routes'));

 app.set('view engine','ejs');
 app.set('views','views');
 app.use(express.static('asset'));

 
 
 app.use(express.json({limit:'1mb'}));
 const db=require('./config/mongoose');
 
 app.use(express.urlencoded());
 app.use(express.json());
 //tell app to use cookies and read it when any request comein
 app.use(cookieparser());

 app.use('/', router);

     
 



     

 


//  app.get('/',function(req,res)
//  {

//     console.log("req reved");
//   console.log(req);

//   res.render('home',{
//     title:"title"
//    });

//  });
 

app.listen(port, function(err)
{
if(err)
{
    console.log("erro occures on server creation");
     
}
 
console.log("Server is Running on port"+port);


});
