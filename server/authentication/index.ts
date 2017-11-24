((module) => {
    const express = require('express');
    const app = express();

    let getKeys = (pos) => {
        let keys = [
            ['4', '6', '1', '5', '8', '0', '2', '3', '9', '7'],
            ['1', '5', '2', '8', '3', '0', '4', '6', '7', '9'],
            ['2', '3', '1', '4', '8', '9', '7', '5', '0', '6'],
            ['3', '1', '0', '8', '7', '2', '5', '9', '6', '4']
        ]
        return keys[pos];
    };

    let isInvalidCard = (key) => {
        return '4557000000000000' === key;
    };

    app.get('/keyboard/random', (req, res) => {
        res.set('X-KEYBOARD', 'z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==');
        res
            .json({
                'success': true,
                'errors': [],
                'response': getKeys(Math.floor((Math.random() * 4)))
            });
    })

    app.post('/authenticate', (req, res) => {
        let data = {
            response: { name: 'Benito' }
        };
        if (isInvalidCard(req.body.cardNumber)) {
            res
                .status(500)
                .json(data);
        } else {
            res
                .status(200)
                .json(data);
        }
    });

    module.exports = app;
})(module);
