(function (module) {
    var express = require('express');
    var app = express();
    var mutual_fund = require('./data/ffmm-historical-rentability.json');
    var fixed_term_deposit = require('./data/fixed-deposit-pen.json');
    app.get('/investment-product/:idProduct/mutual-fund', function (req, res) {
        if (!req.query.minYear || !req.query.maxYear) {
            res.status(500)
                .json({});
        }
        res.json(mutual_fund);
    });
    app.get('/investment-product/:idProduct/fixed-deposit', function (req, res) {
        res.json(fixed_term_deposit);
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/9368136ea31ca760122a782cdbf373d926bfc5f3f90dc6b3eabcd67c88fbe468.js.map