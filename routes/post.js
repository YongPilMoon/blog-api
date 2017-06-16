var express = require('express');
var sequelize = require('../config/db');
var Post = require('../models/post');

var router = express.Router();


router.post('/', (req, res) => {
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

module.exports = router;