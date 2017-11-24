(function (module) {
    var express = require('express');
    var app = express();
    var products = require('./data');
    app.get('/products', function (req, res) {
        res.json(products);
    });
    app.get('/products/:product', function (req, res) {
        var productsResponse = products[req.params.product] ? products[req.params.product] : {};
        res.json(productsResponse);
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/a801db453ecbfe1dc1fe71200f45823ce98b8cda3128c28e4a20e13220f5b8fd.js.map