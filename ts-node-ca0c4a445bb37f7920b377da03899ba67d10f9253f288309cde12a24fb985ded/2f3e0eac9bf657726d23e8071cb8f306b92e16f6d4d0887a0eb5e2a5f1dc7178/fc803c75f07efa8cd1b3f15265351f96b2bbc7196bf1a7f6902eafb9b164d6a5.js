(function (module) {
    var express = require('express');
    var app = express();
    var investProductLongTermData = require('./data/invest-product');
    var globals = require('../global');
    var plan = 0;
    app.post('/customer', function (req, res) {
        if (req.body.dni === '99999999') {
            var data = {
                'code': 'CU01',
                'name': 'CustomerNotFoundByDni',
                'message': 'Customer was not found with the following dni 10203040'
            };
            res.status(500)
                .json(globals.primeResponse(data, 500));
        }
        else if (req.body.dni === '00000000') {
            var data = {
                'message': 'Internal server error'
            };
            res.status(500)
                .json(data);
        }
        else {
            res.header(globals.headers.xIterationId, globals.newUUID());
            var data = {
                dni: '69696969',
                id: '910a8964-3aba-4026-afea-4550fb74c76b',
                journey: 'GUIDED',
                name: 'ivan'
            };
            res.send(globals.primeResponse(data));
        }
    });
    app.post('/customer/:idCustomer/goal', globals.validateXIterationUser, function (req, res) {
        var data = {};
        res.json(globals.primeResponse(data));
    });
    app.post('/customer/:idCustomer/profiling', globals.validateXIterationUser, function (req, res) {
        var data = {
            profile: 'SAFETYLOVER'
        };
        res.json(globals.primeResponse(data));
    });
    app.delete('/customer/:idCustomer/profiling', globals.validateXIterationUser, function (req, res) {
        var data = {};
        res.json(globals.primeResponse(data));
    });
    app.put('/customer/:idCustomer/profiling/:profileRisk', globals.validateXIterationUser, function (req, res) {
        var data = {};
        res.json(globals.primeResponse(data));
    });
    app.get('/customer/:idCustomer/investment-product', globals.validateXIterationUser, function (req, res) {
        if (plan === 0) {
            res.json(require('./data/minimum.json'));
            return;
        }
        if (plan === 1) {
            res.json(require('./data/medium.json'));
            return;
        }
        if (plan === 2) {
            res.json(require('./data/maximum.json'));
            return;
        }
        if (plan === 3) {
            res.json(require('./data/one-custom-short-term.json'));
            return;
        }
        if (plan === 4) {
            res.json(require('./data/maximum-4k.json'));
            return;
        }
        if (plan === 5) {
            res.json(require('./data/maximum-2k.json'));
            return;
        }
    });
    app.post('/customer/:idCustomer/investment-product', globals.validateXIterationUser, function (req, res) {
        if (!req.body.id_plan || !req.body.id_product) {
            res.status(500)
                .json(globals.primeResponse({}, 500));
        }
        else {
            if (plan === 0) {
                res.json(require('./data/one-minimum.json'));
                return;
            }
            if (plan === 1) {
                res.json(require('./data/one-medium.json'));
                return;
            }
            if (plan === 2) {
                res.json(require('./data/one-maximum.json'));
                return;
            }
            if (plan === 3) {
                res.json(require('./data/one-custom-short-term.json'));
                return;
            }
            if (plan === 4) {
                res.json(require('./data/one-maximum-4k.json'));
                return;
            }
            if (plan === 5) {
                res.json(require('./data/one-maximum-2k.json'));
                return;
            }
        }
    });
    app.post('/customer/:idCustomer/preferences', globals.validateXIterationUser, function (req, res) {
        plan = 0;
        switch (true) {
            case req.body.time >= 3 && req.body.period === 'YEAR' && req.body.amount >= 10000:
                plan = 2;
                break;
            case ((req.body.time >= 6 && req.body.time < 33 && req.body.period === 'MONTH') ||
                (req.body.time < 3 && req.body.period === 'YEAR')):
                plan = 1;
                break;
            case (req.body.time < 6 && req.body.period === 'MONTH'):
                plan = 0;
                break;
            case ((req.body.time === 33 || req.body.time === 34 || req.body.time === 35) && req.body.period === 'MONTH'):
                plan = 3;
                break;
            case ((req.body.time >= 3 && req.body.period === 'YEAR' && req.body.amount >= 4000)):
                plan = 4;
                break;
            case (req.body.time >= 3 && req.body.period === 'YEAR' && req.body.amount >= 2000):
                plan = 5;
                break;
        }
        var data = {};
        res.json(globals.primeResponse(data));
    });
    app.post('/customer/:idCustomer/investment-product/:idCustomerInvestment/rating', globals.validateXIterationUser, function (req, res) {
        res.status(204)
            .json(globals.primeResponse({}));
    });
    app.post('/customer/:idCustomer/investment-product/:idCustomerInvestment/mailing', globals.validateXIterationUser, function (req, res) {
        res.status(204)
            .json(globals.primeResponse({}));
    });
    app.post('/customer/:idCustomer/terms-conditions', globals.validateXIterationUser, function (req, res) {
        var status = req.body.agreed ? 204 : 500;
        res.status(status)
            .json(globals.primeResponse({}, status));
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/fc803c75f07efa8cd1b3f15265351f96b2bbc7196bf1a7f6902eafb9b164d6a5.js.map