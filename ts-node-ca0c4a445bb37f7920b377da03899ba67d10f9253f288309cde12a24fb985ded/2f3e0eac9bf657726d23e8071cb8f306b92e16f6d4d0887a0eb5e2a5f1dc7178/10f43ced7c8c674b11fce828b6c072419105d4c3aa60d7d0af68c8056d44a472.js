(function (module) {
    var express = require('express');
    var app = express();
    var globals = require('../global');
    app.get('/atrapaniebla', function (req, res) {
        res.json(require('./data/list.json'));
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/10f43ced7c8c674b11fce828b6c072419105d4c3aa60d7d0af68c8056d44a472.js.map