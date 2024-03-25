"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = exports.HTTP = exports.httpException = exports.HttpException = void 0;
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    function HttpException(statusCode, message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        _this.message = message;
        Object.setPrototypeOf(_this, HttpException.prototype);
        return _this;
    }
    HttpException.prototype.serialize = function () {
        return { statusCode: this.statusCode, message: this.message };
    };
    return HttpException;
}(Error));
exports.HttpException = HttpException;
var httpException = function (statusCode, message) {
    throw new HttpException(statusCode, message);
};
exports.httpException = httpException;
var HTTP = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
};
exports.HTTP = HTTP;
var HttpMessages = (_a = {},
    _a[HTTP.BAD_REQUEST] = 'Bad Request',
    _a[HTTP.UNAUTHORIZED] = 'Unauthorized',
    _a[HTTP.FORBIDDEN] = 'Forbidden',
    _a[HTTP.NOT_FOUND] = 'Not Found',
    _a[HTTP.METHOD_NOT_ALLOWED] = 'Method Not Allowed',
    _a[HTTP.INTERNAL_SERVER_ERROR] = 'Internal Server Error',
    _a[HTTP.BAD_GATEWAY] = 'Bad Gateway',
    _a[HTTP.SERVICE_UNAVAILABLE] = 'Service Unavailable',
    _a);
function throwError(res, statusCode, message) {
    res.status(statusCode).json({
        status: res.statusCode,
        message: message,
        meta: null,
        data: null,
    });
}
exports.throwError = throwError;
