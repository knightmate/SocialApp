var mongoose=require('mongoose');
var multer=require('multer');
var path=require('path');

var AVTAR_PATH=path.join("/upload/user/avtar");


const userScheme=new mongoose.Schema({
 

    email:{
    
        type:String,
        required:true,
        unique:true,
        
    
    },
    
    password:{

        type:String,
        required:true,
        
    },
    avtar:{
        type:String,
        
    }
     
}, {timestamps: true} );


let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname,'..', AVTAR_PATH));
     },
    filename: function (req, file, cb) {
        cb(null , file.fieldname+'-'+Date.now());
    }
});


//static method
userScheme.static.uploadedAvtar=multer({storage:storage}).single('avtar');
userScheme.static.avtarPath=AVTAR_PATH;


const User=mongoose.model('User', userScheme);

module.exports=User;
