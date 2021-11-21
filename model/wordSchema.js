const mongoose = require('mongoose')
const wordSchema = new mongoose.Schema({
  useremail:{require:true,type:String},
  word:{require:true,type:String},
  meaning:{require:true,type:String}
})
const words = mongoose.model('pwaproject-allwords',wordSchema)
module.exports = words;