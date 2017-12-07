((module) => {
    const express = require('express');
    const app = express();
    const globals = require('../global');

    app.get('/atrapaniebla', globals.validateXIterationUser, (req, res) => {
        res.json(require('./data/list.json'));
    });

    app.post('/atrapaniebla', (req, res) => {
        res.json({});
    });

    app.put('/atrapaniebla/:id', (req, res) => {
        res.json({});
    });

    app.delete('/atrapaniebla/:id', (req, res) => {
        res.json({});
    });

    app.post('/atrapaniebla/foto_atrapanieblas', (req, res) => {
        res.json({});
    });

    app.get('/atrapaniebla/listar_pendiente', (req, res) => {
        res.json(require('./data/pending.json'));
    });

    app.put('/atrapaniebla/estado_atrapanieblas/:id', (req, res) => {
        res.json({});
    });

    module.exports = app;
})(module);
