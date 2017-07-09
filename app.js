process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';
var config    = require(__dirname + '/config/config.json')[process.env.NODE_ENV];

var app = require('./config/express')();
var logger = require('morgan');
var cors = require('cors')();

var postRouter = require('./routes/post');
var userRouter = require('./routes/user');



app.set('jwt-secret', config.secret);

app.use(cors);
app.use(logger('dev'));

app.use('/post/', postRouter);
app.use('/user/', userRouter);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});