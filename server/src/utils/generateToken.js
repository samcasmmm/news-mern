"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var generateToken = function (_a) {
    var res = _a.res, userId = _a.userId;
    var secretKey = process.env.SECRET_KEY;
    var token = jsonwebtoken_1["default"].sign({ userId: userId }, secretKey, {
        expiresIn: '2d'
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 2 * 24 * 60 * 60 * 1000
    });
    return token;
};
exports["default"] = generateToken;
