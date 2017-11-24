((module) => {
    const express = require('express');
    const app     = express();

    app.post('/fixed-deposit/simulation', (req, res) => {
        res.send({
            base: 10000,
            earnings: 400,
            rate: 0.04,
            date: 1519880400000
        })
    })

    module.exports = app;
})(module);
