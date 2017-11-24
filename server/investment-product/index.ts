((module) => {
    const express = require('express');
    const app = express();
    const mutual_fund = require('./data/ffmm-historical-rentability.json');
    const fixed_term_deposit = require('./data/fixed-deposit-pen.json');

    app.get('/investment-product/:idProduct/mutual-fund', (req, res) => {
        if (!req.query.minYear || !req.query.maxYear) {
            res.status(500)
                .json({});
        }
        res.json(mutual_fund);
    });

    app.get('/investment-product/:idProduct/fixed-deposit', (req, res) => {
        res.json(fixed_term_deposit);
    });

    module.exports = app;
})(module);
