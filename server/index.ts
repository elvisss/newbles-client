(() => {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();

    const authenticationModule = require('./authentication/');
    const configurationModule = require('./configuration/');

    const atrapaniebla = require('./atrapaniebla/');
    const dispositivo = require('./dispositivo/');
    const servomotor = require('./servomotor/');
    const bateria = require('./bateria/');

    const globals = require('./global');
    const prefix = '/api';
    const getStatusCode = () => {
        const status = [200, 500];
        const random = Math.random() * 10;
        let pos = 1;
        if (Math.floor(random) < 7) {
            pos = 0;
        }
        return status[pos];
    };

    app.use(bodyParser.json());
    app.use((req, res, next) => {
        const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:4201'];
        const origin = req.headers.origin;
        if (allowedOrigins.indexOf(origin) > -1) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Headers', 'X-KEYBOARD, Content-type, X-TOKEN-KEYBOARD-ENCRYPTED-6-PIN, X-ITERATION-ID, X-CUSTOMER-CODE');
        res.header('Access-Control-Expose-Headers', 'X-KEYBOARD, X-ITERATION-ID, X-CUSTOMER-CODE');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        next();
    });

    app.all('*', (req, res, next) => setTimeout(() => next(), 0));

    app.use(prefix, authenticationModule);
    app.use(prefix, configurationModule);

    app.use(prefix, atrapaniebla);
    app.use(prefix, dispositivo);
    app.use(prefix, servomotor);
    app.use(prefix, bateria);

    app.get('/', (req, res) => {
        res.send({
            title: 'Prime (frontend)'
        });
    });

    app.listen(6969);
})();
