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

app.use("/posts", (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    return res.status(403).json({
                        status: "Failed",
                        message: err.message
                    })
                }
                req.user = decoded.data
                next();
            })
        } else {
            return res.status(404).json({
                status: "Failed",
                message: "Not authenticated user"
            })
        }
    } catch (e) {
        res.json({
            status: "Error",
            message: e.message
        })
    }
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/posts",addProperty);
app.use('/login',loginPage);
app.use('/register',registerPage)
app.use('/properties',Getproperty)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.listen(process.env.PORT, () => {
  console.log("server is up at port 5000")
})  