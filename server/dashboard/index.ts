((module) => {
    const express = require('express');
    const app     = express();

    var simulations = require('./data');

    app.get('/dashboard/simulations', (req, res) => {
        res.json(simulations);
    });

    app.get('/dashboard/simulations/:simulation', (req, res) => {
        var simulationsResponse = simulations[req.params.simulation] ? simulations[req.params.simulation] : {};
        res.json(simulationsResponse);
    });

    module.exports = app;
})(module);
