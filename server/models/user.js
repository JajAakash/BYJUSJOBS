const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const userSchema=new Schema({
    //email:{type:String, required:true},
    //password:{type:String, required:true},
    userName:{type:String, required:true},
    googleid:{type:String, required:true}

});

const User=mongoose.model('user',userSchema,'USER')
module.exports=User;