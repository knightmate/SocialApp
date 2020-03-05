const  express =require('express');
//const app=express();
 
const router=express.Router();


const postcontroller=require('../controllers/postcontroller');
 
router.post('/post', postcontroller.post );



module.exports=router;

 