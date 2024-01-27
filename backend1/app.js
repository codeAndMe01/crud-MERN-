const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Operation = require('./model/Operations');
const env = require('dotenv').config();

app.use(cors());
app.use(express.json());

const URL = process.env.MONGO_URL
mongoose.set("strictQuery",true)
mongoose.connect(URL)
.then(()=>{
    console.log("db connected");
})
.catch((error)=>{"db",error})


app.post('/createUser',async (req,res)=>{
    const {name,email,age} = req.body;
    
    const user = await Operation.create({name,email,age})
    try {
        res.json({name,email,age});
        
    } catch (error) {
        console.log("error",error);
    }
    
})

app.get('/',async (req,res)=>{
    
   const user = await Operation.find({})
   
   res.json(user)

})


app.get('/getUser/:id',async (req,res)=>{
    const {id} = req.params;

    try {
        const user = await Operation.findById(id);
        res.json(user)
    } catch (error) {
        res.json("check you server",error)
    }
})


app.put('/updateUser/:id',async (req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body 
    const user = await Operation.findByIdAndUpdate(id , {name,email,age},{new:true});
    res.json(user)
})

app.delete('/deleteUser/:id',async (req,res)=>{
    const {id} = req.params;

    const delUser = await Operation.findByIdAndDelete(id);
    // console.log(delUser)
     
    res.json(delUser)
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connected to server ${PORT}`)
})