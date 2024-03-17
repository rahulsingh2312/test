const mongoose=require("mongoose")

const FormSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    mobile:Number,
    address:String,
    pincode:Number

})

const FormModel=mongoose.model("formdbs",FormSchema)
module.exports=FormModel