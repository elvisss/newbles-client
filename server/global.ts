((module) => {
    const uuid = require('uuid/v4');

    let _uuid = '';
    const xIterationId = 'X-TOKEN';
    const newUUID = () => {
        _uuid = uuid();
        return _uuid;
    };
    const validateXIterationUser = (req, res, next) => {
        if (req.header(xIterationId)) {
            next();
        }
        res.status(500)
            .end();
    };
    const primeResponse = (response: any, statusCode = 200) => {
        return {
            success: statusCode !== 500,
            response,
            errors: []
        };
    };

    const globals = {
        newUUID,
        headers: {
            xIterationId
        },
        validateXIterationUser,
        primeResponse
    };

    module.exports = globals;
})(module);
