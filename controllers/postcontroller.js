
const post=require('../models/post');

module.exports.post=function(req,res){

  
    console.log("user id is"+req.cookies.userid);
    post.create({
  
        content:req.body.content,

        user:req.cookies.userid

    }, function(err, user){


        if(err)
        {
            console.log("errr "+err);
           return;
        }else{

            res.redirect('back');
            
        }
    


    })


}