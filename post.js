module.exports = function(sequelize){
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
    return Post;
};
