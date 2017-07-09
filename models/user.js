var sequelize = require('../config/db');
const Sequelize = require('sequelize');
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
    return this.password === password
};

module.exports = User;