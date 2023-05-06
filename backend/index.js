const connectToDatabase = require('./db');
const express = require('express');
const Student = require('./models/student')
const Admin = require('./models/admin')
const bodyParser = require('body-parser');
const cors = require("cors")
const { body, validationResult } = require("express-validator");
const  jwt = require('jsonwebtoken');
const verifyStudent = require('./middleware/VerifyStudent');
const verifyAdmin = require('./middleware/VerifyAdmin');
const JWT_SECRET ="iamabadboy"; 
const app = express();
connectToDatabase();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',async(req,res)=>{
  res.send("Hello Friends");
})
//Route 1: login student Using email and rollno 
app.post('/studentlogin',
[
  body("email", "Enter a valid email").isEmail(),
    body("rollNo", "Roll no cant be blank").exists(),
], 
async(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {email,rollNo}= req.body;
    let student = await Student.findOne({email:email});
    if(!student){
      return res.status(400).json({error:"please login with correct email credentials"});
    }
    const password = student.rollNo;
    if(password!=rollNo){
      return res.status(400).json({error:"please login with correct rollNo credentials"})
    }
    const data={
      student:{
        id:student.id,
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken})
    } catch (error) {
      
      console.log(error)
      res.status(500).send("some error occured")
    }
})
app.get('/studentlist',verifyStudent,async(req,res)=>{
  try {
    let students= await Student.find();
  const studentList = students;
  res.send(studentList);
  } catch (error) {
    console.log(error)
      res.status(500).send("some error occured")
  }
})
app.get('/studentdata',verifyStudent,async(req,res,token)=>{
  try {
    const decode = jwt.verify(req.header("auth-token"),JWT_SECRET);
  let studentdata = await Student.findById(decode.student.id);
  res.send(studentdata);
  } catch (error) {
    console.log(error)
    res.status(500).send("some error occured")
  }
})
app.post('/adminlogin',
[
  body("email", "Enter a valid email").isEmail(),
    body("rollNo", "Roll no cant be blank").exists(),
]
,async(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    const {email,rollNo} = req.body;
  let admin = await Admin.findOne({email:email});
  if(!admin){
    return res.status(400).json({error:'please login through corrects credential'});
  }
  
  let password = admin.rollNo;
  if(password!=rollNo){
    return res.status(400).json({error:"please login through correct credentials"});
  }
  const data ={
    admin:{
      id: admin.id
    }
  }
  const authToken = jwt.sign(data,JWT_SECRET);
  res.json({authToken});
  } catch (error) {
    console.log(error)
    return res.status(500).json({error:"some error occured"})
  }
  
})
app.get('/admindata',verifyAdmin,async(req,res,token)=>{
  try {
    const decode = jwt.verify(req.header("auth-token"),JWT_SECRET);
  let admindata = await Admin.findById(decode.admin.id);
  res.send(admindata);
  } catch (error) {
    console.log(error)
    res.status(500).send("some error occured")
  }
})

app.listen(5000,()=>{
  console.log("app is connected to port 5000");
});