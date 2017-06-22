var config = require("./env/" + (process.env.NODE_ENV || "development") + ".js");

const Sequelize = require('sequelize');
var sequelize = new Sequelize('blog', config.db.host, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;