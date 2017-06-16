var express = require('express');
var sequelize = require('../config/db');
var Post = require('../models/post');

var router = express.Router();


router.route('/')

    .post((req, res) => {
        var title = req.body.title;
        var content = req.body.content;
        createPost(title, content);
    });

router.route('/list')

    .get((req, res) => {
        Post.findAll()
            .then((posts) =>
                res.json(posts))
    });

var createPost = (title, content) => {
    sequelize.sync()
        .then(() => Post.create({
            title: title,
            content: content
        }));
};

module.exports = router;