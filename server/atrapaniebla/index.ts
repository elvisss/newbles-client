((module) => {
    const express = require('express');
    const app = express();

    const globals = require('../global');

    app.get('/atrapaniebla', (req, res) => {
        res.json(require('./data/list.json'));
    });

    module.exports = app;
})(module);
