const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');
const path = require('path');
const directory = path.join(__dirname, '/uploads');
const {mongoose} = require('./database');

//settings
app.set('port', process.env.PORT || port);

//middlewares
app.use(morgan('dev'));
app.use(express.json());//sustituye a BodyParser

app.use((req,res,next)=>{
    // res.header("Content-Security-Policy", "default-src 'self';");
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, DELETE, PATCH, POST, PUT')
        return res.status(200).json({})
    }
    next()
})

//routes
app.use('/api/test', require('./routes/test.routes'));
app.use('/api/images',require('./routes/image.routes'))
app.use('/api/news', require('./routes/news.routes'));

const controllerFixRouter = (req, res) => {
    res.sendFile(path.join(path.join(__dirname, 'public'), 'index.html')), err => {
        if (err) {
            res.status(500).send(err)
        }
    };
}

app.get('/bio', controllerFixRouter);
app.get('/pinturas', controllerFixRouter);
app.get('/noticias', controllerFixRouter);
app.get('/contacto', controllerFixRouter);
app.get('/gestionimagenes', controllerFixRouter);
app.get('/gestionnoticias', controllerFixRouter);


//static files
app.use(express.static(path.join(__dirname, 'public')));


//start
app.listen(app.get('port'), () => {
    console.log(`Escuchando por puerto: ${app.get('port')}`);
})
