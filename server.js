const express = require('express')
const app = new express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3036
const route = require('./router')
app.use(cors({
    origin:["https://lerno.netlify.app"],
    methods:["GET","POST"],
    credentials:true
  }))

const db = require('./config/key').MongoURI;
mongoose.connect(db,{ useNewUrlParser: true })
.then(console.log('Connected successfully'))
.catch(err=>{console.log(err)})

app.use(express.urlencoded({extended: true})); 
app.use(express.json());  

app.use(route)
app.listen(PORT,()=>{
   console.log(`Listening at port ${PORT}`)
})