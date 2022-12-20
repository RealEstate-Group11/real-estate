const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect('mongodb://0.0.0.0/database',{useNewUrlParser:true})
mongoose.connection.once('open',()=>{
    console.log('Connected to db')
}).on('connectionError',(err)=>{
    console.log(err)
})
app.listen(3003,()=>console.log("server is up at port 3003"))
app.get("/",(req,res)=>{
  res.send("backend works")
})
