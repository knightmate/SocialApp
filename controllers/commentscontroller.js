const comment=require('../models/comment');
const Post=require('../models/post');



 
 module.exports.comment=function(req,res)
 {

    console.log(req.cookies.userid);
    Post.findById(req.body.post, function(err, post){

      if(post)
      {
        
      
          comment.create(
         { 
              content:req.body.content,
              post:req.body.post,
              user:req.cookies.userid,

        },function(err, cmnt){


            if(err){

                console.log("err"+err);
                return;

            }else{


            console.log(post);
            post.comments.push(cmnt);
          
            post.save();
            res.redirect('/profile');

            }
          }) 


      }else{
          console.log("post not found"+err);
      }

    });


 }
    


 