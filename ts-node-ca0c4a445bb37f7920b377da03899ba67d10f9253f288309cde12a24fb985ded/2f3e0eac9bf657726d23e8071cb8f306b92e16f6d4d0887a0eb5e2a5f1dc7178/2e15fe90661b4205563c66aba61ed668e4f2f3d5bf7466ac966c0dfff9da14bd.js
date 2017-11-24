(function (module) {
    var express = require('express');
    var app = express();
    var globals = require('../global');
    var base = require('./data/base.json');
    var profiling1 = require('./data/profiling1.json');
    var profiling2 = require('./data/profiling2.json');
    var profiling3 = require('./data/profiling3.json');
    var profiling4 = require('./data/profiling4.json');
    var preferences = require('./data/preferences.json');
    var investment = require('./data/investment.json');
    app.get('/customer-status', function (req, res) {
        res.header(globals.headers.xIterationId, globals.newUUID());
        var dni = req.get('X-CUSTOMER-CODE');
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
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/2e15fe90661b4205563c66aba61ed668e4f2f3d5bf7466ac966c0dfff9da14bd.js.map