const express=require('express');
const app=express();
const port=8000;


app.listen(port, function(err)
{
if(err)
{
    console.log("erro occures on server creation");
     
}
 
console.log("Server is Running on port"+port);


});
