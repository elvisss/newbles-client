(function () {
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    var adminModule = require('./admin/');
    var adviserModule = require('./customer/adviser/');
    var authenticationModule = require('./authentication/');
    var configurationModule = require('./configuration/');
    var customerModule = require('./customer/');
    var customerStatusModule = require('./customer-status/');
    var dashboardModule = require('./dashboard/');
    var investmentProductModule = require('./investment-product/');
    var productModule = require('./product/');
    var purchaseModule = require('./purchase/');
    var simulatorModule = require('./simulator/');
    var surveyModule = require('./survey/');
    var atrapaniebla = require('./atrapaniebla/');
    var globals = require('./global');
    var prefix = '/api';
    var getStatusCode = function () {
        var status = [200, 500];
        var random = Math.random() * 10;
        var pos = 1;
        if (Math.floor(random) < 7) {
            pos = 0;
        }
        return status[pos];
    };
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        var allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];
        var origin = req.headers.origin;
        if (allowedOrigins.indexOf(origin) > -1) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Headers', 'X-KEYBOARD, Content-type, X-TOKEN-KEYBOARD-ENCRYPTED-6-PIN, X-ITERATION-ID, X-CUSTOMER-CODE');
        res.header('Access-Control-Expose-Headers', 'X-KEYBOARD, X-ITERATION-ID, X-CUSTOMER-CODE');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        next();
    });
    app.all('*', function (req, res, next) { return setTimeout(function () { return next(); }, 0); });
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
    app.get('/', function (req, res) {
        res.send({
            title: 'Prime (frontend)'
        });
    });
    app.listen(6969);
})();
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/ed5bb88e1f2a142051b4a37c70d76949f9a838119a6e71cebe1cad4d727ec561.js.map