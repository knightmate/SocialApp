const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/social_app');


const db=mongoose.connection;
 
db.on('error',console.error.bind(console, 'error, somethinf went wrong'));


db.once('open', function()
{

    console.log("SucessFully COnnected");

});
