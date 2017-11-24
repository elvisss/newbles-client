((module) => {
    const express = require('express');
    const app = express();

    const investProductLongTermData = require('./data/invest-product');
    const globals = require('../global');
    let plan = 0;

    app.post('/customer', (req, res) => {
        if (req.body.dni === '99999999') {
            const data = {
                'code': 'CU01',
                'name': 'CustomerNotFoundByDni',
                'message': 'Customer was not found with the following dni 10203040'
            };
            res.status(500)
                .json(globals.primeResponse(data, 500));
        } else if (req.body.dni === '00000000') {
            const data = {
                'message': 'Internal server error'
            };
            res.status(500)
                .json(data);
        } else {
            res.header(globals.headers.xIterationId, globals.newUUID());
            const data = {
                dni: '69696969',
                id: '910a8964-3aba-4026-afea-4550fb74c76b',
                journey: 'GUIDED',
                name: 'ivan'
            };
            res.send(globals.primeResponse(data));
        }
    });

    app.post('/customer/:idCustomer/goal', globals.validateXIterationUser, (req, res) => {
        const data = {};
        res.json(globals.primeResponse(data));
    });

    app.post('/customer/:idCustomer/profiling', globals.validateXIterationUser, (req, res) => {
        const data = {
            profile: 'SAFETYLOVER'
        };
        res.json(globals.primeResponse(data));
    });

    app.delete('/customer/:idCustomer/profiling', globals.validateXIterationUser, (req, res) => {
        const data = {};
        res.json(globals.primeResponse(data));
    });

    app.put('/customer/:idCustomer/profiling/:profileRisk', globals.validateXIterationUser, (req, res) => {
        const data = {};
        res.json(globals.primeResponse(data));
    });

    app.get('/customer/:idCustomer/investment-product', globals.validateXIterationUser, (req, res) => {
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

    app.post('/customer/:idCustomer/investment-product', globals.validateXIterationUser, (req, res) => {
        if (!req.body.id_plan || !req.body.id_product) {
            res.status(500)
                .json(globals.primeResponse({}, 500));
        } else {
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

    app.post('/customer/:idCustomer/preferences', globals.validateXIterationUser, (req, res) => {
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
        const data = {};
        res.json(globals.primeResponse(data));
    });

    app.post('/customer/:idCustomer/investment-product/:idCustomerInvestment/rating', globals.validateXIterationUser, (req, res) => {
        res.status(204)
            .json(globals.primeResponse({}));
    });

    app.post('/customer/:idCustomer/investment-product/:idCustomerInvestment/mailing', globals.validateXIterationUser, (req, res) => {
        res.status(204)
            .json(globals.primeResponse({}));
    });

    app.post('/customer/:idCustomer/terms-conditions', globals.validateXIterationUser, (req, res) => {
        const status = req.body.agreed ? 204 : 500;
        res.status(status)
            .json(globals.primeResponse({}, status));
    });

    module.exports = app;
})(module);
