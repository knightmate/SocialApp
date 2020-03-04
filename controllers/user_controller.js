
module.exports=profile=function(req,res)
{

    console.log("We are on the server of the controller");
    console.log(req.cookies);
    res.cookie('userid', 25);
    return  res.end("We are sending the profile page");
     

   

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

    //to later

};


//sign in and create the session for the user(its for registerd user)
module.exports.createsesssion=function(req, res)
{

    //to later

};
