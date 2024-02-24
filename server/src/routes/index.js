"use strict";
exports.__esModule = true;
exports.ROUTES = void 0;
var health_1 = require("@/routes/health");
var mid1 = function (req, res, next) {
    console.log('m1');
    next();
};
var mid2 = function (req, res, next) {
    console.log('m2');
    next();
};
var mid3 = function (req, res, next) {
    console.log('m3');
    next();
};
var pathBuilder = function (path) {
    return '/api/' + path;
};
exports.ROUTES = [
    {
        title: '',
        description: '',
        pseudoPath: '/api/health',
        path: pathBuilder(''),
        middleware: [mid1, mid2, mid3],
        route: health_1["default"]
    },
];
