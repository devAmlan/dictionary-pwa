const mongoose = require('mongoose')
const authschema = new mongoose.Schema({
  email:{require:true,type:String},
  googleId:{require:true,type:String},
  name:{require:true,type:String}
})

const users = mongoose.model('pwaproject-allusers',authschema)
module.exports = users