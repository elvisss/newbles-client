((module) => {
    const express = require('express');
    const app = express();
    const globals = require('../global');
    const base = require('./data/base.json');
    const profiling1 = require('./data/profiling1.json');
    const profiling2 = require('./data/profiling2.json');
    const profiling3 = require('./data/profiling3.json');
    const profiling4 = require('./data/profiling4.json');
    const preferences = require('./data/preferences.json');
    const investment = require('./data/investment.json');

    app.get('/customer-status', (req, res) => {
        res.header(globals.headers.xIterationId, globals.newUUID());
        const dni = req.get('X-CUSTOMER-CODE');
        switch (dni) {
            case '11111111':
                res.json(globals.primeResponse(base));
                break;
            case '22222221':
                res.json(globals.primeResponse(profiling1));
                break;
            case '22222222':
                res.json(globals.primeResponse(profiling2));
                break;
            case '22222223':
                res.json(globals.primeResponse(profiling3));
                break;
            case '22222224':
                res.json(globals.primeResponse(profiling4));
                break;
            case '33333333':
                res.json(globals.primeResponse(preferences));
                break;
            case '44444444':
                res.json(globals.primeResponse(investment));
                break;
            default:
                res.json(globals.primeResponse({}));
        }
    });

    module.exports = app;
})(module);
