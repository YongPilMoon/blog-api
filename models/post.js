module.exports = function(sequelize, DataTypes){
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        content: {
            type: DataTypes.STRING,
            field: 'content'
        },
        introduction: {
            type: DataTypes.STRING,
            field: 'introduction'
        }
    }, {
        freezeTableName: true
    });

    return Post;
};


