const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require('cors')
const addProperty = require('./routes/addproperty')
const Getproperty=require('./routes/get')
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
  console.log(req.url)
  res.send("Hola")
})

app.use('/posts',Getproperty)
app.use("/posts",addProperty)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);



app.listen(process.env.PORT, () => {
  console.log("server is up at port 5000")
})  