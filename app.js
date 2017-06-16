const Sequelize = require('sequelize');
var sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
});

var app = require('./config/express')();
var Post = require('./post')(sequelize);

app.post('/post', (req, res) => {
    var title = req.body.title;
    var content = req.body.content;
    createPost(title, content);
});

var createPost = (title, content) => {
    sequelize.sync()
        .then(() => Post.create({
            title: title,
            content: content
        }))
        .then(post => {
            console.log(post.get({
                plain: true
            }));
        });
};


app.listen(3000, () => {
    console.log('Connected, 3000 port!');
});