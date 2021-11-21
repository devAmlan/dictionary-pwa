const express = require('express')
const router = new express.Router();
const words = require('./model/wordSchema')
const users = require('./model/authSchema')
router.get('/',(req,res)=>{
    res.send({"message":"Hello from server"})   
   })

router.post('/user',(req,res)=>{
  const {email,googleId,name}= req.body
  users.findOne({googleId}).then((userdata)=>{
    if(userdata){
    res.send({welcomemsg:`Welcome back ${userdata.name}`})
    }
    else{
      const newUser = new users({
        name,googleId,email
      })
      newUser.save().then((user)=>{
        res.send({registermsg:"Registered successfully"})
      }).catch((err)=>{console.log(err)})
    }
  })
})
router.post('/add',(req,res)=>{

     const {word,meaning,useremail} = req.body;
     words.findOne({word:word}).then((worddata)=>{
       if(worddata){
         res.send({"message":"word already exist"})
       }
       else{
        const newWord = new words({useremail,word,meaning})

        newWord.save().then(()=>{
          res.send({"successmsg":"word added successfully"})
          })
       }   
     })
     
})
router.get('/words',(req,res)=>{
  words.find().then((worddata)=>{
    res.send(worddata)
  })
})
router.get('/dltword/:id',(req,res)=>{
  words.deleteOne({_id:req.params.id})
  .then((resp)=>{
    
  }).catch((err)=>{console.log(err)})
})
module.exports = router