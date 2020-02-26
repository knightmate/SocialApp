function home (req,res)
{

    const m= require('../models/index');

     m(function(title)
     {
          res.render('home',{
               title:title
         });


     });
      


}
 
module.exports=home;