const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const jobSchema=new Schema({
    title:String,
    applylink:String,
    jd:String,
    companyname:String,
    location:String,
    experience:String,
    salary:String,
    type:String,
    skills:String,
    startdate:Date,
    enddate:Date,
    created:Date,
    source:String
})

module.exports=mongoose.model('jobs',jobSchema,'BYJUSJOBS')