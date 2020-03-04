var mongoose=require('mongoose');

const userScheme=new mongoose.Schema({
 

    email:{
    
        type:String,
        required:true,
        unique:true,
    
    },
    
    password:{

        type:password,
        required:true,
        
    },       
     timestamps:true
});


const User=mongoose.model('user', userScheme);

module.exports.User;
