const express = require('express')
const router = new express.Router();
const words = require('./model/wordSchema')
router.get('/',(req,res)=>{
    res.send({"message":"Hello from server"})   
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
module.exports = router