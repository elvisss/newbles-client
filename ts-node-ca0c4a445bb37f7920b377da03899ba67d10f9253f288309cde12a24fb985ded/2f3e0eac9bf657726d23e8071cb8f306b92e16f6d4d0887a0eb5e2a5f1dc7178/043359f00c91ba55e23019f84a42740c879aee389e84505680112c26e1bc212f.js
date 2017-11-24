(function (module) {
    var express = require('express');
    var app = express();
    app.post('/fixed-deposit/simulation', function (req, res) {
        res.send({
            base: 10000,
            earnings: 400,
            rate: 0.04,
            date: 1519880400000
        });
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/043359f00c91ba55e23019f84a42740c879aee389e84505680112c26e1bc212f.js.map