const express=require('express');

const bodyParser=require('body-parser');

const path=require('path');

const cookieSession=require('cookie-session')

const api=require('./server/routes/api');

const port =process.env.PORT || 5000;

const app=express();

var auth = require("./server/routes/auth");
var key=require('./server/config/key')
var passport = require('./server/config/passport');

app.use(function(req, res, next) {
    console.log("origin allowing")
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));
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

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist'));

});

app.listen(port,function(){
    console.log("server running on port:" + port)

});



