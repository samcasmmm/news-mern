"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
var notFound = function (req, res, next) {
    var error = new Error("Not found - ".concat(req.method, " ").concat(req.originalUrl));
    res.status(404).send({
        status: res.statusCode,
        message: 'API Route is Not Found',
        url: req.url,
        meta: '' || null,
        data: null,
        stack: null,
    });
    next(error);
};
exports.notFound = notFound;
var errorHandler = function (err, req, res, next) {
    var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        status: statusCode,
        message: err.message,
        url: req.url,
        meta: '' || null,
        data: null,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
exports.errorHandler = errorHandler;
