const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
var Sentiment = require('sentiment');
var aylien = require("aylien_textapi");
// set aylien API credentias
var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
  });
app.use(express.static('dist'));
app.use(bodyParser).json;
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
console.log(__dirname)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
//post information from API
projectData={};
app.post('/results', PostToAPI);
    function PostToAPI(req, res){
        console.log(req);
        let data = {};
        let form = req.body.url;
        textapi.sentiment({
            'url': form,
            'mode': 'document'
        },
        function (error, res){
            if(error === null){
            projectData = data;
            data.polarity = res.polarity;
            data.subjectivity = res.subjectivity;
            data.confidence = res.confidence;
            data.text = res.text;
            Object.assign(projectData, data);
            console.log('API called', projectData);
            res.send(data);
            
            }else{
                console.log("error");
    }
});
}