const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./config/mongoose');

const port = process.env.PORT || 5600;

const expressLayout = require('express-ejs-layouts');

app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(express.static('./assets')); //to access the static files
// app.use(expressLayout);


app.use(bodyParser.json());

const userDb = require('./model/user');

app.use('/',require('./routes/index'));

app.listen(port,function(req,res){
    console.log(`The app is running on the port ${port}`);

})