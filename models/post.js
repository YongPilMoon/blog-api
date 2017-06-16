var sequelize = require('../config/db');
const Sequelize = require('sequelize');
const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING,
        field: 'title'
    },
    content: {
        type: Sequelize.STRING,
        field: 'title'
    }
}, {
    freezeTableName: true
});

module.exports = Post;
