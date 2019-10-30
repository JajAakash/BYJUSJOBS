const express=require('express');

const bodyParser=require('body-parser');

const path=require('path');

const cookieSession=require('cookie-session')

const api=require('./server/routes/api');

const port =process.env.PORT || 5000;

const app=express();

const fetch = require("node-fetch");

app.set("trust proxy", true);

var auth = require("./server/routes/auth");
var profile = require("./server/routes/profile");

var key=require('./server/config/key')
var passport = require('./server/config/passport');

// app.use(function(req, res, next) {
//     console.log("origin allowing")
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     if(req.method=='OPTIONS'){
//         res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//         return res.status(200).json({});
//     }
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Auth-Token");
//     // res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
//     next();
//   });

app.use(function(req, res, next){
    // console.log(req.header('X-Forwarded-Proto'));
    if (process.env.HTTPS_ENABLED === "true") {
        if (req.header('X-Forwarded-Proto') === 'http' && req.method === "GET") {
            res.redirect(301, "https://" + req.headers.host + req.originalUrl);
        } else {
            next();
        }
    } else {
        next();
    }
});






app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[key.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/byjusjobs',api);
app.use('/auth',auth)
app.use('/profile',profile)
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist'));

});

app.listen(port,function(){
    console.log("server running on port:" + port)

});



