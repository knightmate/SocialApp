const  express =require('express');
//const app=express();
 
const router=express.Router();
const homeController=require("../controllers/index");
 
//module.exports = router ;
 console.log("router loaded");
 
 router.get('/',homeController);

  router.get('/user',require('./users'));

  
 

 


module.exports=router;