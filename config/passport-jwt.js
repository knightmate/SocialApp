
const passport=require('passport');

const JwtStrategy=require('passport-jwt').Strategy;
const extractJwt=require('passport-jwt').ExtractJwt;
const User=require('../models/user');


let opt={

    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'socialapp'
    
};



passport.use(new JwtStrategy(opt, function(jwt_payload, done) {
    

    User.findById(jwt_payload.id,function(err, user){

        if(err) 
        {
            console.log("erro in finding the user");
            return;
        }

        if(user)
        {
            return done(null, user);
        }else{

            return done(null, false);
        }


    })


}));

module.exports=passport;