const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || port);

//middlewares
app.use(morgan('dev'));
app.use(express.json());//sustituye a BodyParser

//routes
app.use(require('./routes/test.routes'));

//static files


//start
app.listen(app.get('port') , () => {
    console.log(`Escuchando por puerto: ${app.get('port')}`);
})
