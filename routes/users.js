const  express =require('express');
//const app=express();
 
const router=express.Router();


const userController=require('../controllers/user_controller');
 
const home =require('../controllers/index');


console.log("Server is commming on the user router");

router.get('/',userController);
//router.get('/user',userController);
router.get('/singn_in',userController.singin);       

router.get('/sing_up',userController.singup );




module.exports=router;