const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./config/mongoose');

port = 5600;

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

const userDb = require('./model/user');

app.use('/',require('./routes/index'));

app.listen(port,function(req,res){
    console.log(`The app is running on the port ${port}`);

})