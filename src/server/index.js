const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

var aylien = require("aylien_textapi");

// set aylien API credentias
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: "b17085e0e3dd4aa6f671ccf85263830e",
    application_key: "af90b4ef"
  });