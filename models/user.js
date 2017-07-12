const crypto = require('crypto');
var env       = process.env.NODE_ENV;
var config    = require(__dirname + '/../config/config.json')[env];

module.exports = function(sequelize, DataTypes){

    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            field: 'title'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        admin: {
            type: DataTypes.BOOLEAN,
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

    return User;
};



