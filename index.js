const express = require('express');
const app = express();
const path = require('path')
const port = 1337;
const routes = require('./server/routes/Employee');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//template Engine:
app.set('views','./views');
app.set('view engine', 'ejs');

//use routes:
app.use('/',routes);


app.listen(port,()=>{
    console.log(`server listening...at ${port}`);
})