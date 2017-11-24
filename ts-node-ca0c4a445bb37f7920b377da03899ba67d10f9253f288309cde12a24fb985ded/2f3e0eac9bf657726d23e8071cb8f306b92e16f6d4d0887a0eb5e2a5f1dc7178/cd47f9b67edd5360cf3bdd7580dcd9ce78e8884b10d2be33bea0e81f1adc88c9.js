(function (module) {
    var express = require('express');
    var app = express();
    var simulations = require('./data');
    app.get('/dashboard/simulations', function (req, res) {
        res.json(simulations);
    });
    app.get('/dashboard/simulations/:simulation', function (req, res) {
        var simulationsResponse = simulations[req.params.simulation] ? simulations[req.params.simulation] : {};
        res.json(simulationsResponse);
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/cd47f9b67edd5360cf3bdd7580dcd9ce78e8884b10d2be33bea0e81f1adc88c9.js.map