const express=require('express');
const router=express.Router();
const User =require('./../models/users')
const {jwtAuthMiddleware,generateToken}= require('./../jwt')


//POST route ti add a person

router.post('./signup',async(req,res)=>{
    try{

        const data=req.body //assumes body contains person data

        //create new user doc using mongoose model
        const newUser=new User(data);

        //save the new user to database
        const response=await newUser.save();
        console.log('data saved')

        const payload ={
            id:response.id
        }

        console.log(JSON.stringify(payload));
        const token=generateToken(payload);
        console.log("Token is",token);

        res.status(200).json({response: response, token: token});

    }

    catch(err)
    {
        
    }
})