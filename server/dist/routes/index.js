"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
var health_1 = __importDefault(require("@/routes/health"));
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
        title: 'Health',
        description: 'Check health of server',
        pseudoPath: '/api/health',
        path: pathBuilder(''),
        middleware: [mid1, mid2, mid3],
        route: health_1.default,
    },
    {
        title: 'Users',
        description: 'Users routes',
        pseudoPath: '/api/users',
        path: pathBuilder(''),
        middleware: [mid1, mid2, mid3],
        route: health_1.default,
    },
];
