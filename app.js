var app = require('./config/express')();
var cors = require('cors')();
var postRouter = require('./routes/post');


app.use(cors);
app.use('/post/', postRouter);


app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});