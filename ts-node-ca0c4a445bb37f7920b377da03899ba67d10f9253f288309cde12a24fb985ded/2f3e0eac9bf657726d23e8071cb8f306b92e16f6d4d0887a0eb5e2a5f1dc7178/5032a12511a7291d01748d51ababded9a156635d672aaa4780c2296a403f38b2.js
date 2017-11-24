(function (module) {
    var express = require('express');
    var app = express();
    var globals = require('../global');
    app.post('/admin/invitation-mailing', function (req, res) {
        if (req.body.dni[0] === '00000000') {
            var data = {};
            res.status(500).json(globals.primeResponse(data, 500));
        }
        else {
            var data = {
                result: [
                    {
                        dni: '10203040',
                        send: false,
                        message: 'no existe el cliente'
                    },
                    {
                        dni: '10203040',
                        send: true,
                        message: 'Se envió'
                    }
                ]
            };
            res.json(globals.primeResponse(data));
        }
    });
    module.exports = app;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/5032a12511a7291d01748d51ababded9a156635d672aaa4780c2296a403f38b2.js.map