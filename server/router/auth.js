const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

require('../db/conn');
const User=require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('Hello from server auth js');
});

router.post('/signup',async (req,res)=>{

    const {name,username,password,cpassword}=req.body;

    if(!name||!username||!password||!cpassword)
    {
        return res.status(422).json({error:'Please fill the fields correctly'});
    }

    try {

        const userExist=await User.findOne({username:username});
        
        if(userExist)
        {
            return res.status(422).json({error:'User already exist'});
        }else if(password!=cpassword)
        {
            return res.status(422).json({error:'Password not matching'});
        }
        
    
        const user=new User({name,username,password,cpassword});
        //user pre
        await user.save();
        console.log(`${user} successfully register`);
        
        return res.status(201).json({message:'User details saved'});
    
    } catch (err) {
        console.log(err);
    }
    
})


//login route

router.post('/signin' ,async (req,res)=>{

    try {
        
        const {username,password}=req.body;

        if(!username || !password){
            res.status(400).json({error:'Please fill both the fields'});
        }

        const userLogin = await User.findOne({username:username});
        
        if(userLogin)
        {
            const isMatch= await bcrypt.compare(password,userLogin.password);

            const token= await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });

        if(!isMatch){
            res.status(400).json({error:"Wrong password.Re-enter password"});
        }else{
            res.json({message:"user signin successfully"});
        }
        }else
        {
            res.status(400).json({error:"Invalid username.Re-enter username"});
        }
        

    } catch (err) {
        console.log(err);
    }

})

module.exports=router;