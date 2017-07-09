var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var express = require('express');
var jwt = require('jsonwebtoken');
var sequelize = require('../config/db');
var User = require('../models/user');
var router = express.Router();


router.route('/login')

    .post((req, res) => {
        const username = req.body.username || '';
        const password = req.body.password || '';
        const secret = req.app.get('jwt-secret');

        const check = (user) => {
            if(!user){
                throw new Error('login faild')
            }else {
                if(user.verify(password)){
                    const p = new Promise((resolve, reject) => {
                        jwt.sign(
                            {
                                _id: user._id,
                                username: user.username,
                                admin: user.admin
                            },
                            secret,
                            {
                                expiresIn: '7d',
                                issuer: 'myblog.com',
                                subject: 'userInfo'
                            }, (err, token) => {
                                if(err) reject(err);
                                resolve(token)
                            })
                    });
                    return p
                } else {
                    throw new Error('login failed')
                }
            }
        };

        const respond = (token) => {
            res.json({
                message: 'logged in successfully',
                token
            })
        };

        const onError = (error) => {
            res.status(403).json({
                message: error.message
            })
        };

        User.findOne({
            where: {
                username: username,
                password: password
            }
        })
            .then(check)
            .then(respond)
            .catch(onError)
    });

router.route('/signup')

    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        sequelize.sync()
            .then(() => User.create({
                username: username,
                password: password
            }))
            .then(rst => res.send(rst.dataValues))
    });

module.exports = router;