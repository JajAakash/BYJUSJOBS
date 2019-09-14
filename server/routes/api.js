const express =require ('express');
const router =express.Router();
const mongoose=require('mongoose')
const Jobs=require('../models/jobs');

const url="mongodb://aakashjaj:Mapapa%400055@ds257551.mlab.com:57551/byjusjobs"
mongoose.Promise=global.Promise;

mongoose.connect(url,function(err){
    if(err){
        console.log("Error !!!"+err);
    }
});

router.get('/jobs',function(req,res){
    console.log('finding all jobs for u');
    Jobs.find({}).exec(function(err,jobs){
        if(err){
        }else{
            res.json(jobs)
        }
    })
});


router.get('/jobs/:id',function(req,res){
    console.log('finding all jobs for u');
    Jobs.findById(req.params.id).exec(function(err,jobs){
        if(err){
            console.log("error while fetching your jobs")
        }else{
            res.json(jobs)
        }
    })
});


router.get('/jobs5/:location',function(req,res){
    console.log('finding all jobs for5 u');
    Jobs.findOne({location:req.params.location}).exec(function(err,jobs){
        if(err){
            console.log("error while fetching your jobswsssssss>>>>>>>>")
        }else{
            res.json(jobs)
        }
    })
});



module.exports = router;