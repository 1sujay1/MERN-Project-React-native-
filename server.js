const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./src/v1/controllers/index');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)

mongoose.connect(process.env.MONGO_DD, {
    useNewUrlParser: true, useUnifiedTopology: true
})

    .then(console.log("Connected to mongodb instance" + process.env.MONGO_DD))
    .catch(err => {
        console.error("Err0r connecting to mongodb", err)
    })


app.get('/', (req, res) => {
    return res.send("Hello Sujay")
})


app.listen(process.env.APP_PORT, () => {
    console.log(`Listening to port ${process.env.APP_PORT}`)
})