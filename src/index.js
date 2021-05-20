const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const path = require('path');

//settings
app.set('port', process.env.PORT || port);

//middlewares
app.use(morgan('dev'));
app.use(express.json());//sustituye a BodyParser

//routes
app.use('/api/test',require('./routes/test.routes'));

//static files
app.use(express.static(path.join(__dirname ,'public')));


//start
app.listen(app.get('port') , () => {
    console.log(`Escuchando por puerto: ${app.get('port')}`);
})
