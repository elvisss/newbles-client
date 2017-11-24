((module) => {
    const express = require('express');
    const app     = express();

    var products = require('./data');

    app.get('/products', (req, res) => {
        res.json(products);
    });

    app.get('/products/:product', (req, res) => {
        var productsResponse = products[req.params.product] ? products[req.params.product] : {};
        res.json(productsResponse);
    });

    module.exports = app;
})(module);
