const  express =require('express');
//const app=express();
 
const router=express.Router();


const postcontroller=require('../controllers/commentscontroller');
 
router.post('/comment', postcontroller.comment );



module.exports=router;

 