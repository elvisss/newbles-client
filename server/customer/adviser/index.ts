((module) => {
    const express = require('express');
    const app     = express();
    const globals = require('../../global');

    app.get('/customer/:customerId/advisor', (req, res) => {
        const data = {
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

    app.post('/customer/:customerId/invesment-adviser/:investmentAdviserId/appointment', (req, res) => {
        res.json({
            errors: [],
            response: {
                'idAppointment': '4a34ab0f-7851-45d0-8eb8-5113e0962481'
            },
            success: true
        });
    });

    app.post('/customer/:customerId/advisor/:idInvestmentAdvisor/advice', globals.validateXIterationUser, (req, res) => {
        res.json({
            errors: [],
            response: {},
            success: true
        });
    });

    module.exports = app;
})(module);
