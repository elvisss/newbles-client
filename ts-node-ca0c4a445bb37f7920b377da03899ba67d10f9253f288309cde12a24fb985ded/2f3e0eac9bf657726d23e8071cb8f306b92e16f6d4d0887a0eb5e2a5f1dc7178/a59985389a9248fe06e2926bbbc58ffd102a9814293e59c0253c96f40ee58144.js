(function (module) {
    var express = require('express');
    var app = express();
    var globals = require('../../global');
    app.get('/customer/:customerId/advisor', function (req, res) {
        var data = {
            errors: [],
            response: {
                'id': '34214a12-4249-11e7-93f0-0242ac140006',
                'names': 'Yan',
                'lastname': 'Luy',
                'secondLastname': 'Manrique',
                'phone': '944464662',
                'email': 'yluy@bcp.com.pe',
                'photo': 'https://s3-us-west-2.amazonaws.com/prime.innovacxionbcpdev.com/assets/images/asesor.jpeg'
            },
            success: true
        };
        res.json(data);
    });
    app.post('/customer/:customerId/invesment-adviser/:investmentAdviserId/appointment', function (req, res) {
        res.json({
            errors: [],
            response: {
                'idAppointment': '4a34ab0f-7851-45d0-8eb8-5113e0962481'
            },
            success: true
        });
    });
    app.post('/customer/:customerId/advisor/:idInvestmentAdvisor/advice', globals.validateXIterationUser, function (req, res) {
        res.json({
            errors: [],
            response: {},
            success: true
        });
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/a59985389a9248fe06e2926bbbc58ffd102a9814293e59c0253c96f40ee58144.js.map