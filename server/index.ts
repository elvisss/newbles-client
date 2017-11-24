(() => {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();

    const adminModule = require('./admin/');
    const adviserModule = require('./customer/adviser/');
    const authenticationModule = require('./authentication/');
    const configurationModule = require('./configuration/');
    const customerModule = require('./customer/');
    const customerStatusModule = require('./customer-status/');
    const dashboardModule = require('./dashboard/');
    const investmentProductModule = require('./investment-product/');
    const productModule = require('./product/');
    const purchaseModule = require('./purchase/');
    const simulatorModule = require('./simulator/');
    const surveyModule = require('./survey/');

    const atrapaniebla = require('./atrapaniebla/');

    const globals = require('./global');
    const prefix = '/api';
    const getStatusCode = () => {
        const status = [200, 500];
        const random = Math.random() * 10;
        let pos = 1;
        if (Math.floor(random) < 7) {
            pos = 0;
        }
        return status[pos];
    };

    app.use(bodyParser.json());
    app.use((req, res, next) => {
        const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];
        const origin = req.headers.origin;
        if (allowedOrigins.indexOf(origin) > -1) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Headers', 'X-KEYBOARD, Content-type, X-TOKEN-KEYBOARD-ENCRYPTED-6-PIN, X-ITERATION-ID, X-CUSTOMER-CODE');
        res.header('Access-Control-Expose-Headers', 'X-KEYBOARD, X-ITERATION-ID, X-CUSTOMER-CODE');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        next();
    });

    app.all('*', (req, res, next) => setTimeout(() => next(), 0));

    app.use(prefix, adminModule);
    app.use(prefix, adviserModule);
    app.use(prefix, authenticationModule);
    app.use(prefix, configurationModule);
    app.use(prefix, customerModule);
    app.use(prefix, customerStatusModule);
    app.use(prefix, dashboardModule);
    app.use(prefix, investmentProductModule);
    app.use(prefix, productModule);
    app.use(prefix, purchaseModule);
    app.use(prefix, simulatorModule);
    app.use(prefix, surveyModule);

    app.use(prefix, atrapaniebla);

    app.get('/', (req, res) => {
        res.send({
            title: 'Prime (frontend)'
        });
    });

    app.listen(6969);
})();
