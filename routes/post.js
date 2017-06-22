var express = require('express');
var sequelize = require('../config/db');
var Post = require('../models/post');

var router = express.Router();


router.route('/')

    .post((req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const introduction = req.body.introduction;

        sequelize.sync()
            .then(() => Post.create({
                title: title,
                content: content,
                introduction: introduction
            }))
            .then(rst => {
                return res.send(rst.dataValues);
            })
    });

router.route('/list')

    .get((req, res) => {
        Post.findAll()
            .then(posts => res.json(posts))
    });

router.route('/:id')

    .get((req, res) => {
        var id = req.params.id;
        Post.findOne({
            where: { id: id}
        }).then(post => {
            post ? res.json(post) : res.status(404).send("No matching post found");
        })
    });

module.exports = router;