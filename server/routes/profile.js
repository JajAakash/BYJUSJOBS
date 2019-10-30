const router =require ('express').Router();
//const router =express.Router();

router.get('/',(req,res)=>{
    res.send("here is main respo",(res.user));
});

module.exports=router;