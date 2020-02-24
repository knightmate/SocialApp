const  express =require('express');
//const app=express();
 
const router=express.Router();


const userController=require('../controllers/user_controller');


console.log("Server is commming on the user router");

router.get('/user',userController);
 





module.exports=router;