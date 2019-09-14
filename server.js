const express=require('express');

const bodyParser=require('body-parser');

const path=require('path');

const api=require('./server/routes/api');

const port =5000;

const app=express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist'));

});

app.listen(port,function(){
    console.log("server running on port:" + port)

});

