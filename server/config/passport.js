var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const key=require('./key')
const User=require('../models/user')
const express =require ('express');
const app=express();
app.use(function(req, res, next) {
    console.log("origin allowing")
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


passport.serializeUser((user, done)=> {
  // console.log(user,user.id);
  done(null, user.id);
});


passport.deserializeUser((id, done)=> {
  // console.log(user,user.id);
  User.findById(id).then((user)=>{
    done(null, user.id);
  })
});

passport.use(new GoogleStrategy({
  callbackURL: '/auth/google/callback',
    clientID: key.google.clientID,
    clientSecret: key.google.clientSecret,
    
  },(accessToken,refreshToken,profile,done)=>{
    User.findOne({googleid:profile.id}).then((currentUser)=>{
      if(currentUser){
        console.log(currentUser+"user already exists")
        done(null,currentUser)
      }
      else{
        console.log("profile is", profile)
        var user = new User();
        user.googleid=profile.id;
        user.userName=profile.displayName;
        user.save().then((newUser)=>{
        console.log("user created"+ newUser)
        done(null,newUser)
        });
      }
    });
  }
));

module.exports=passport;