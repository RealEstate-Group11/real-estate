const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config();

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
  res.send("backend works")
})







mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true} ,
    () => {
      console.log("connected to DB");
    }
  );



app.listen(process.env.PORT,()=>{
  console.log("server is up at port 5000")
})  