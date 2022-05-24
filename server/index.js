const express = require('express')
const app = express()
const mongoose = require('mongoose')
const colors = require("colors")
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const User = require('./models/User')

const userroutes = require('./routes/UserRoutes')
app.use(userroutes)


const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL,
    err => {
        if(err) throw err
        console.log('database run with success'.green)
    });

app.listen(PORT,() => {
    console.log(`sercer run in ${PORT}`)
})