((module) => {
    const express = require('express');
    const app = express();

    const globals = require('../global');

    app.get('/dispositivo', (req, res) => {
        res.json(require('./data/list.json'));
    });

    app.post('/dispositivo', (req, res) => {
        res.json({});
    });

    app.put('/dispositivo/:id', (req, res) => {
        res.json({});
    });

    app.delete('/dispositivo/:id', (req, res) => {
        res.json({});
    });

    module.exports = app;
})(module);
