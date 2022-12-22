const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require('cors')
const addProperty = require('./routes/addproperty');
const loginPage = require('./routes/login');
const registerPage = require('./routes/register')
const Getproperty=require('./routes/get')
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/posts",addProperty);
app.use('/login',loginPage);
app.use('/register',registerPage)
app.use('/getProperty',Getproperty)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.listen(process.env.PORT, () => {
  console.log("server is up at port 5000")
})  