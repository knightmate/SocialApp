var mongoose=require('mongoose');

const postScheme=new mongoose.Schema({
 

    content:{
    
        type:String,
        required:true,
      
    
    },
    
    user:{

        type:mongoose.Schema.Types.ObjectId;
        required:true,
        
    },
     
}, {timestamps: true} );


const Post =mongoose.model('Post', userScheme);

module.exports=Post;
