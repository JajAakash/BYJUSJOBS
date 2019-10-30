
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

  

// router.get('/google',passport.authenticate('google',{
    
//     scope:[
        
//         'https://www.googleapis.com/auth/plus.login',
//         'https://www.googleapis.com/auth/userinfo.email'
//         //'profile'
//     ]
// }));

// router.get('/google/callback',passport.authenticate('google'),(req,res)=>{
//     res.send((req.user));
// });


function setRedirectAfterLoginPath(req, res, next) {
    req.session.returnTo = 'http://localhost:4200/';
    next();
    console.log("req session printing"+req.session.returnTo)
}


router.get('/google',
    setRedirectAfterLoginPath,
    passport.authenticate('google',{
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            //'https://www.googleapis.com/auth/userinfo.email'
        ]
        
}));

function redirectAfterLogin(req, res) {
    var redirectPath = req.session.returnTo;
    delete req.session.returnTo;
    res.redirect(redirectPath);
}

router.get('/google/callback',
    passport.authenticate('google', {
        // successRedirect: 'back',
        failureRedirect: 'back'
    }), redirectAfterLogin);

router.get("/logout", function(req, res , next) {
    var refURL = 'http://localhost:4200/postJobs';
    req.logout();
    res.redirect(refURL);
});

module.exports=router