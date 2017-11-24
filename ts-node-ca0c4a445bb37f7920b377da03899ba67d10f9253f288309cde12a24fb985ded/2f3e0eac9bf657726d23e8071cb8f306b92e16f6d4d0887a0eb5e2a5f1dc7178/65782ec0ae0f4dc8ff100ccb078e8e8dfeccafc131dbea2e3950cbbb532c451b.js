(function (module) {
    var uuid = require('uuid/v4');
    var _uuid = '';
    var xIterationId = 'X-ITERATION-ID';
    var newUUID = function () {
        _uuid = uuid();
        return _uuid;
    };
    var validateXIterationUser = function (req, res, next) {
        if (req.header(xIterationId)) {
            next();
        }
        res.status(500)
            .end();
    };
    var primeResponse = function (response, statusCode) {
        if (statusCode === void 0) { statusCode = 200; }
        return {
            success: statusCode !== 500,
            response: response,
            errors: []
        };
    };
    var globals = {
        newUUID: newUUID,
        headers: {
            xIterationId: xIterationId
        },
        validateXIterationUser: validateXIterationUser,
        primeResponse: primeResponse
    };
    module.exports = globals;
})(module);
//# sourceMappingURL=/home/elvis/git/newbles-client/ts-node-ca0c4a445bb37f7920b377da03899ba67d10f9253f288309cde12a24fb985ded/2f3e0eac9bf657726d23e8071cb8f306b92e16f6d4d0887a0eb5e2a5f1dc7178/65782ec0ae0f4dc8ff100ccb078e8e8dfeccafc131dbea2e3950cbbb532c451b.js.map