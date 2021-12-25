const express = require('express');
const app = express();
const mongoose = require('mongoose')

const routes = require('./src/v1/controllers/index');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)

mongoose.connect('mongodb+srv://admin:admin@cluster0.2sucg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

    .then(console.log("Connected to mongodb instance"))
    .catch(err => {
        console.error("Err0r connecting to mongodb", err)
    })
var zlib = require('zlib');
var fs = require('fs');
var util = require('util');
var txt = 'Congratulate %s on his %dth %s birthday!';
var result = util.format(txt, 'Linus', 6, 'gkkg');

console.log(result);

app.get('/', (req, res) => {
    // var gzip = zlib.createGzip();
    // var r = fs.createReadStream('./demofile.txt');
    // var w = fs.createWriteStream('./mygzipfile.txt.gz');
    // r.pipe(gzip).pipe(w);
    return res.send("Hello Sujay")
})
let port = 3002;
// var dns = require('dns');
// var http = require('http');
// var url = require('url');

app.listen(port, () => {
    // var w3 = dns.lookup('www.learningsea.in', function (err, addresses, family) {
    // var w3 = dns.resolveCname('www.learningsea.in', function (err, addresses, family) {
    //     console.log(addresses);
    //     console.log(err);
    //     console.log(family);
    // });
    // console.log(w3);

    console.log(`Listening to port ${port}`)
})