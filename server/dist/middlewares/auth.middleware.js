"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.protect = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var users_model_1 = __importDefault(require("@/models/users.model"));
var verifyToken = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, secretKey, decoded, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.headers.authorization &&
                    req.headers.authorization.startsWith('Bearer'))) return [3 /*break*/, 4];
                token = req.headers.authorization.split(' ')[1];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                secretKey = process.env.SECRET_KEY;
                decoded = jsonwebtoken_1.default.verify(token, secretKey);
                return [4 /*yield*/, users_model_1.default.findById(decoded.userId).select('-password')];
            case 2:
                user = _a.sent();
                if (user) {
                    req.user = user;
                    // console.log(req.user);
                    return [2 /*return*/, next()];
                }
                else {
                    res.status(404).send({
                        status: res.statusCode,
                        message: 'User not found',
                        meta: null,
                        data: null,
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(401).send({
                    status: res.statusCode,
                    message: 'Not Authorized, Token Failed',
                    meta: null,
                    data: null,
                });
                return [3 /*break*/, 4];
            case 4:
                if (!token) {
                    res.status(401).send({
                        status: res.statusCode,
                        message: 'Not Authorized, No Token',
                        meta: null,
                        data: null,
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
var protect = (0, express_async_handler_1.default)(verifyToken);
exports.protect = protect;
var isAdmin = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, secretKey, decoded, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.headers.authorization &&
                    req.headers.authorization.startsWith('Bearer'))) return [3 /*break*/, 4];
                token = req.headers.authorization.split(' ')[1];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                secretKey = process.env.SECRET_KEY;
                decoded = jsonwebtoken_1.default.verify(token, secretKey);
                return [4 /*yield*/, users_model_1.default.findById(decoded.userId).select('-password')];
            case 2:
                user = _a.sent();
                if (user) {
                    req.user = user;
                    console.log(req.user);
                    if (req.user.role === 'admin') {
                        return [2 /*return*/, next()];
                    }
                    else {
                        res.status(401);
                        next({ message: 'Not Authorized' });
                    }
                }
                else {
                    res.status(404).send({
                        status: res.statusCode,
                        message: 'Not Authorized, No Access',
                        meta: null,
                        data: null,
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(401).send({
                    status: res.statusCode,
                    message: 'Not Authorized, Token Failed',
                    meta: null,
                    data: null,
                });
                return [3 /*break*/, 4];
            case 4:
                if (!token) {
                    res.status(401).send({
                        status: res.statusCode,
                        message: 'Not Authorized, No Token',
                        meta: null,
                        data: null,
                    });
                }
                return [2 /*return*/];
        }
    });
}); });
exports.isAdmin = isAdmin;
