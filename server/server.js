

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require("cors")

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/formdb', { useNewUrlParser: true, useUnifiedTopology: true });



const FormSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    mobile:Number,
    address:String,
    pincode:Number,
    resume:Object

})

const FormModel = mongoose.model('FormModel', FormSchema);



app.post("/insert",async (req,res)=>{
  console.log(req.body)

  const username=req.body.username
  const email=req.body.email
  const password=req.body.password
  const mobile=req.body.mobile
  const address=req.body.address
  const pincode=req.body.pincode
  const resume=req.body.resume

  const newform=new FormModel({
    username:username,
    email:email,
    password:password,
    mobile:mobile,
    address:address,
    pincode:pincode,
    resume:resume

  })

  try{
    await newform.save()
    res.send("Inserted")

  }
  catch(err){
    console.log(err)

  }


})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
