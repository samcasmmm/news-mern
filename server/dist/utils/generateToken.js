"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateToken = function (res, userId) {
    var secretKey = process.env.SECRET_KEY;
    var token = jsonwebtoken_1.default.sign({ userId: userId }, secretKey, {
        expiresIn: '2d',
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    return token;
};
exports.default = generateToken;
