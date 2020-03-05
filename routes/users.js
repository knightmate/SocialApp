const  express =require('express');
//const app=express();
 
const router=express.Router();


const userController=require('../controllers/user_controller');
 
const home =require('../controllers/index');


console.log("Server is commming on the user router");

router.get('/',userController);
//router.get('/user',userController);
router.get('/sign_in',userController.singin);       

router.get('/sign_up',userController.singup );

router.post('/create', userController.create);
 
router.post('/createsession', userController.createsesssion);

router.get('/profile', userController.profile);

router.get('/signout', function(req,res)
{
    res.redirect('sign_in');
})

const temp=require('./post');
const tempcomment=require('./comment');

router.post('/post', temp );
router.post('/comment',tempcomment);

module.exports=router;