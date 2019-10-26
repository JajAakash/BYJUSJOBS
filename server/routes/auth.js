
var passport = require('passport');
const express =require ('express');
const router =express.Router();

const app=express();
app.use(function(req, res, next) {
    console.log("origin allowing")
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  

router.get('/google',passport.authenticate('google',{
    
    scope:[
        'https://www.googleapis.com/auth/plus.login'
        //'profile'
    ]
}));

router.get('/google/callback',passport.authenticate('google'),(req,res)=>{
    res.send(req.user);
});


module.exports=router