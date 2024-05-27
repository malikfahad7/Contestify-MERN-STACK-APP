const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const path = require('path')
 const multer = require('multer')

const SignupModel = require('./models/signup')
const ParticipationRequest = require('./models/participaterequest')
const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/authentication");


//Method for register route....
app.post('/register',(req,res)=>{
    SignupModel.create(req.body)
    .then(result => res.json("Success"))
    .catch(err=>res.json(err))
})

//Method for login route....
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    SignupModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Invalid")
            }
        }
        else{
            res.json("No Record exists")
        }
        })
})
//Method for sending Particiption Request....
// app.post('/request',(req,res)=>{
//     ParticipationRequest.create(req.body).
//     then(result=>res.json("Success"))
//     .catch(err=>res.json(err))
// })

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images')
    },
    filename: (req,file,cb) =>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})
app.post('/upload', upload.single('file'), (req,res)=>{
    const { name } = req.body;
     ParticipationRequest.create({imagePath: req.file.filename,
        name: name
     })
     .then(result => res.json("Success"))
    .catch(err=>res.json(err))
})



app.listen(3001,()=>{
    console.log('Server Running')
})