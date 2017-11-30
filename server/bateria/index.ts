((module) => {
    const express = require('express');
    const app = express();

    const globals = require('../global');

    app.get('/tipo_bateria', (req, res) => {
        res.json(require('./data/list.json'));
    });

    app.post('/tipo_bateria', (req, res) => {
        res.json({});
    });

    app.put('/tipo_bateria/:id', (req, res) => {
        res.json({});
    });

    app.delete('/tipo_bateria/:id', (req, res) => {
        res.json({});
    });

    module.exports = app;
})(module);
