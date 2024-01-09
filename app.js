//Basic lib import
const express = require('express')
const apiRouter = require('./src/Routes/api')
const bodyParser = require('body-parser')
const app = express()

//Security middleware lib import
const cors = require('cors')
const helmet = require('helmet')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')
const sanitizePlugin = require('express-mongo-sanitize')

//Database lib import
const mongoose = require('mongoose')

//Security middleware implimentation
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(sanitizePlugin())

//Set  request rate limit
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 300,
    message: "Rate limit exceed try again later",
    statusCode: 429,
    headers:true
})
app.use(limiter)

//Body parser middleware
app.use(bodyParser.json())

//  Connet to MongoDB Database
let URI = "mongodb+srv://demoDatabase:1234@cluster0.gdvqevi.mongodb.net/StudentAdmission"
let OPTION = {user: "", pass: "", autoIndex: true}
mongoose
        .connect(URI, OPTION)
        .then(() => {
            console.log("Database Connected!")
        })
        .catch((err) => console.log(err))


//Routing impliment
app.use('/api', apiRouter)

// Undefined route (It should be the last that means after the main routing file. if do not match any route then undefined route will act.)
app.use("*", (req, res) => {
    res.status(404)
    res.json({"status": "Failed", "data": "Not Found!"})
})

  
module.exports = app;