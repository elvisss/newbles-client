((module) => {
    const express = require('express');
    const app = express();
    const globals = require('../global');

    app.post('/admin/invitation-mailing', (req, res) => {
        if (req.body.dni[0] === '00000000') {
            const data = {};
            res.status(500).json(globals.primeResponse(data, 500));
        } else {
            const data = {
                result: [
                    {
                        dni: '10203040',
                        send: false,
                        message: 'no existe el cliente'
                    },
                    {
                        dni: '10203040',
                        send: true,
                        message: 'Se envió'
                    }
                ]
            };
            res.json(globals.primeResponse(data));
        }
    });

    module.exports = app;
})(module);
