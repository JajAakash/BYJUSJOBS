const express =require ('express');
const router =express.Router();
const mongoose=require('mongoose')
const Jobs=require('../models/jobs');

const url="mongodb://admin:admin123@ds257551.mlab.com:57551/byjusjobs"
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
            console.log("Error fetching while jobs")
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


router.get('/jobsin/:location',function(req,res){
    Jobs.find({location:req.params.location}).exec(function(err,jobs){
        if(err){
            console.log("error while fetching your job Details")
        }else{
            res.json(jobs)
        }
    })
});

router.get('/jobsin/:location',function(req,res){
    console.log('finding all jobs for5 u');
    Jobs.find({location:req.params.location}).exec(function(err,jobs){
        if(err){
            console.log("error while fetching your job Details")
        }else{
            res.json(jobs)
        }
    })
});


router.post('/job/listed',function(req,res){
    
    var postJob = new Jobs();
    postJob.title=req.body.title;
    postJob.applylink=req.body.applylink;
    postJob.jd=req.body.jd;
    postJob.companyname=req.body.companyname;
    postJob.location=req.body.location;
    postJob.experience=req.body.experience;
    postJob.salary=req.body.salary;
    postJob.type=req.body.type;
    postJob.skills=req.body.skills;
    postJob.startdate=req.body.startdate;
    postJob.enddate=req.body.enddate;
    postJob.created=req.body.created;
    postJob.source=req.body.source;
    console.log("222222222222222",postJob.applylink,postJob.skills,postJob.salary,req.body.title)
    
    postJob.save(function(err,postedJob){
        console.log("99999999");
        if(err){
            console.log(err,"Error saving Jobs")
        }
        else{
            res.json(postedJob)
        }
    });

});


module.exports = router;