
const post=require('../models/post');
const User=require('../models/user');

module.exports.post=function(req,res){

    var user;
    // console.log("user id is"+req.cookies.userid);
    //  console.log('body'+req);
    //console.log(req.body);


    //make user.find , it will fetch only user to that post, this method is (post .find populate is fetching user for all post wihc is same
    
    //  user ....it is fetching all post userid where user is req.cookies.id)

    User.findById(id=req.cookies.userid ,function(err, user){ 

        console.log("user"+user);
     

        post.create({
  
            content:req.body.content,
    
            user:req.cookies.userid
    
        }, function(err, post){
    
            if(req.xhr)
            {
                console.log("ajax req");
                //console.log("ajax req"+user);
              
            
             
                return res.status(200).json({
    
                    data:{
                        post:post,
                        user:user,
                      
                    },
                    message:"Post Created"
    
                })
    
                 
     
            }
    
            if(err)
            {
                console.log("errr "+err);
               return;
            } 
        
    
    
        })
    

     });


    
     
     
     
    
    

}