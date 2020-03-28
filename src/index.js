const express = require('express');
const morgan = require('morgan');
const path = require('path');
const body = require('body-parser');

//initialization
const app = express();

//mongoose
require('./database');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(body.json());
app.use(body.urlencoded({extended:false}))

//rputer
app.use(require('./routes/index'))

//static file
app.use(express.static(path.join(__dirname,'public')));


const server = app.listen(app.get('port'),()=>{
    console.log('server on http://localhost:'+app.get('port'))
})

