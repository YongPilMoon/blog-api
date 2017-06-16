module.exports = () => {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();

    app.use(bodyParser.json({extended: false}));
    return app;
};

