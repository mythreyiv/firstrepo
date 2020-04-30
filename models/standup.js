const mongoose=require('mongoose')
const standupSchema=new mongoose.Schema({
    Empname:{type:String},
    Empsal:{type:Number},
    Empaddress:{type:String},
    Emph:{type:Number},
    Emploc:{type:String}

})
module.exports=mongoose.model('Standup',standupSchema)