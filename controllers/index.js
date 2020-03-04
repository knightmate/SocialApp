function home (req,res)
{

           return  res.render('home',{
                         title:"App"
                   });


//     const m= require('../models/index');

//      m(function(title)
//      {
          
//           res.render('home',{
//                title:title
//          });


//      });
 


}
 
module.exports=home;