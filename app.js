var app = require('./config/express')();

var postRouter = require('./routes/post');

app.use('/post/', postRouter);


app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});