((module) => {
    const express = require('express');
    const app = express();

    const globals = require('../global');

    app.get('/tipo_servomotor', (req, res) => {
        res.json(require('./data/list.json'));
    });

    app.post('/tipo_servomotor', (req, res) => {
        res.json({});
    });

    app.put('/tipo_servomotor/:id', (req, res) => {
        res.json({});
    });

    app.delete('/tipo_servomotor/:id', (req, res) => {
        res.json({});
    });

    module.exports = app;
})(module);
