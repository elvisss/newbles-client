(function (module) {
    var express = require('express');
    var app = express();
    var getKeys = function (pos) {
        var keys = [
            ['4', '6', '1', '5', '8', '0', '2', '3', '9', '7'],
            ['1', '5', '2', '8', '3', '0', '4', '6', '7', '9'],
            ['2', '3', '1', '4', '8', '9', '7', '5', '0', '6'],
            ['3', '1', '0', '8', '7', '2', '5', '9', '6', '4']
        ];
        return keys[pos];
    };
    var isInvalidCard = function (key) {
        return '4557000000000000' === key;
    };
    app.get('/keyboard/random', function (req, res) {
        res.set('X-KEYBOARD', 'z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==');
        res
            .json({
            'success': true,
            'errors': [],
            'response': getKeys(Math.floor((Math.random() * 4)))
        });
    });
    app.post('/authenticate', function (req, res) {
        var data = {
            response: { name: 'Benito' }
        };
        if (isInvalidCard(req.body.cardNumber)) {
            res
                .status(500)
                .json(data);
        }
        else {
            res
                .status(200)
                .json(data);
        }
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/707c72aa0fc3b14d07387834dbce0dbda9d1bf609a7c2ff4298a25320ee924f4.js.map