var sequelize = require('../config/db');
const Sequelize = require('sequelize');
const crypto = require('crypto');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        field: 'title'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    admin: {
        type: Sequelize.BOOLEAN,
        field: 'admin',
        defaultValue: false
    }
}, {
    freezeTableName: true
});

User.prototype.verify = function (password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64');

    return this.password === encrypted
};

module.exports = User;