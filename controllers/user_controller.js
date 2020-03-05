
const User=require('../models/user');



module.exports=function(req, res)
{

    const Post=require('../models/post');

    Post.find({}, function(err, posts)
    {
        return res.render('home', {

            title:"Homapge",
            posts:posts,
           
    
         });
    
 

    });
     
}
module.exports.profile=function(req,res)
{
    const Post=require('../models/post');

   // console.log(req.cookies.userid);
      var email1;
    User.findById(id=req.cookies.userid, function(err, user){

     email1= user.email;
   

     Post.find({}).populate('user').exec(function(err, posts){


        if(err)
        {
            console.log("error in creating post"+err);
            return;

        }
        console.log(posts);     
        return res.render('profile', {

             title:"Profile Page",
             email:email1,
             posts:posts,
   
        });



     });
     
 
    });
   // console.log("email"+email1);
      
   

}

 
//   function singup(res, req)
// {

//     return res.render('usersignup', {
    
//     });
     

// }
module.exports.singup =function(req, res)
{
    return res.render('usersignup', {
    
    });
     

}
// module.exports = { example1: ex1, example2: ex2 };

module.exports.singin=function(req, res)
{

    return res.render('usersignin', {

    });
    
};
 
 

module.exports.create=function(req, res)
{

   var p= req.body.password;
   var p2= req.body.conformpassword; 
  // console.log(p+"--"+p2);
   if(p!=p2)
   {
       return res.redirect('back');
   }


   
   User.findOne({email:req.body.email} , function(err, user)
   {

    if(err)
    {
        console.log(err);
        return;

    }
   
    console.log(!user);
    if(!user){

        User.create( req.body, function(err , user){

            if(err)
            {
                console.log("cannot create user");
                return;
            }

          //  console.log(user+" Created");
            res.redirect('singn_in');

        });

    }

    else
    {
         res.redirect('singn_in');
        
    }




   })

  // res.redirect('back');
      

};


//sign in and create the session for the user(its for registerd user)
module.exports.createsesssion=function(req, res)
{

 //find user

 //console.log(req.body); 
 User.findOne({email:req.body.email} , function(err, user)
 {

    if(err)
    {
        console.log("getting erro"+err);
        return;

    }

  //  console.log(user);
    if(user)
    {
// handle pass
if(user.password!=req.body.password)
{
    return res.redirect('back');
}


     res.cookie('userid', user.id);
     res.redirect('profile');

    }else{

       console.log('user not the in database');
      res.redirect('back');

    }


 });


 //user found

 //user password dont match



 //handle session creation

 //user not found




};


