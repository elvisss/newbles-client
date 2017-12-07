((module) => {
    const express = require('express');
    const app = express();
    const globals = require('../global');

    app.post('/authenticate', (req, res) => {
        let data = {
            response: { name: 'Usuario' }
        };
        res.status(200).json(data);
    });

    app.post('/login', (req, res) => {
        res.header(globals.headers.xIterationId, globals.newUUID());
        if (req.body.user == 'user') {
            const data = {
                'user': 'user'
            };
            res.json(data);
        } else if (req.body.user == 'admin') {
            const data = {
                'user': 'admin'
            };
            res.json(data)
        } else {
            res.status(404).json({});
        }
    });

    module.exports = app;
})(module);
