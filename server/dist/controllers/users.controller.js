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
exports.getAllUsers = exports.searchUserByQuery = exports.userById = exports.updateProfile = exports.profile = exports.signUp = exports.signIn = exports.health = void 0;
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var users_model_1 = __importDefault(require("@/models/users.model"));
var generateToken_1 = __importDefault(require("@/utils/generateToken"));
var httpsException_1 = require("@/helpers/httpsException");
/**
 * Check the health of the user route.
 * @route GET /api/user/health
 * @group User - Operations about user
 * @returns {object} 200 - An object indicating the health status of the user route
 * @returns {Error} 500 - Internal server error
 */
var health = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json({
            status: res.statusCode,
            message: 'User Route health is good',
            meta: null,
            data: null,
        });
        return [2 /*return*/];
    });
}); });
exports.health = health;
/**
 * Authenticate a user and generate a JWT token.
 * @route POST /api/users/signIn
 * @group User - Operations about user
 * @param {string} email.body.required - User's email
 * @param {string} password.body.required - User's password
 * @returns {object} 200 - An object containing user information and JWT token
 * @returns {Error} 401 - Unauthorized
 * @returns {Error} 500 - Internal server error
 */
var signIn = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, users_model_1.default.findOne({ email: email })];
            case 1:
                user = _c.sent();
                _b = user;
                if (!_b) return [3 /*break*/, 3];
                return [4 /*yield*/, user.matchPassword(password)];
            case 2:
                _b = (_c.sent());
                _c.label = 3;
            case 3:
                if (_b) {
                    res.json({
                        status: res.statusCode,
                        message: 'Login Successfully',
                        meta: null,
                        data: {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                            token: (0, generateToken_1.default)(res, user._id),
                        },
                    });
                }
                else {
                    // res.status(400);
                    // throw new Error('Invalid Email or Password');
                    (0, httpsException_1.throwError)(res, httpsException_1.HTTP.BAD_REQUEST, 'Invalid Email or Password');
                }
                return [2 /*return*/];
        }
    });
}); });
exports.signIn = signIn;
/**
 * Register a user and generate a JWT token.
 * @route POST /api/user/signUp
 * @group User - Operations about user
 * @param {string} name.body.required - User's name
 * @param {string} email.body.required - User's email
 * @param {string} role.body.required - User's role
 * @param {string} password.body.required - User's password
 * @returns {object} 200 - An object containing user information and JWT token
 * @returns {Error} 401 - Unauthorized
 * @returns {Error} 500 - Internal server error
 */
var signUp = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, role, password, userExists, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, role = _a.role, password = _a.password;
                return [4 /*yield*/, users_model_1.default.findOne({ email: email })];
            case 1:
                userExists = _b.sent();
                if (userExists) {
                    res.status(403);
                    throw new Error('User Already Exists');
                }
                if (password.length > 6) {
                    res.status(403);
                    throw new Error('Invalid Email or Password');
                }
                return [4 /*yield*/, users_model_1.default.create({ name: name, email: email, role: role, password: password })];
            case 2:
                user = _b.sent();
                if (user) {
                    res.json({
                        status: res.statusCode,
                        message: 'User Created.',
                        meta: '',
                        data: {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                            token: (0, generateToken_1.default)(res, user._id),
                        },
                    });
                }
                else {
                    res.status(400);
                    throw new Error('Invalid User Data');
                }
                return [2 /*return*/];
        }
    });
}); });
exports.signUp = signUp;
var profile = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, users_model_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)];
            case 1:
                user = _b.sent();
                if (user) {
                    res.json({
                        status: res.statusCode,
                        message: 'Fetch Profile Successfully',
                        meta: '',
                        data: {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                            createdAt: user.createdAt,
                        },
                    });
                }
                else {
                    res.status(404);
                    throw new Error('User not found');
                }
                return [2 /*return*/];
        }
    });
}); });
exports.profile = profile;
/**
 * Update user profile.
 * @route PUT /api/user/update-profile
 * @group User - Operations about user
 * @param {string} jwt.required - JWT token obtained during user authentication
 * @param {object} body.required - Request body containing updated user profile details
 * @param {string} [body.name] - Updated user name
 * @param {string} [body.email] - Updated user email
 * @param {string} [body.role] - Updated user role (only accessible to admin)
 * @param {string} [body.password] - Updated user password
 * @returns {object} 200 - An object containing updated user information and a new JWT token
 * @returns {Error} 401 - Unauthorized. Invalid or expired JWT token.
 * @returns {Error} 404 - User not found. User associated with the provided JWT token does not exist.
 * @returns {Error} 500 - Internal server error. An unexpected error occurred on the server.
 */
var updateProfile = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, role, password, user, updatedUser;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, role = _a.role, password = _a.password;
                return [4 /*yield*/, users_model_1.default.findById((_b = req.user) === null || _b === void 0 ? void 0 : _b.id)];
            case 1:
                user = _c.sent();
                if (!user) return [3 /*break*/, 3];
                user.name = name || user.name;
                user.email = email || user.email;
                if (req.body.role) {
                    user.role = role;
                }
                if (req.body.password) {
                    user.password = password;
                }
                return [4 /*yield*/, user.save()];
            case 2:
                updatedUser = _c.sent();
                res.json({
                    status: res.statusCode,
                    message: 'Profile Update Successfully',
                    meta: '',
                    data: {
                        _id: updatedUser._id,
                        name: updatedUser.name,
                        email: updatedUser.email,
                        role: updatedUser.role,
                        token: (0, generateToken_1.default)(res, updatedUser._id),
                    },
                });
                return [3 /*break*/, 4];
            case 3:
                res.status(404);
                throw new Error('User not found');
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.updateProfile = updateProfile;
/**
 * Get user profile by ID.
 * @route GET /api/user/{id}
 * @group User - Operations about user
 * @param {string} id.path.required - User ID
 * @returns {object} 200 - An object containing user information
 * @returns {Error} 404 - User not found. The user with the specified ID does not exist.
 * @returns {Error} 500 - Internal server error. An unexpected error occurred on the server.
 */
var userById = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, users_model_1.default.findById(id)];
            case 1:
                user = _a.sent();
                if (user) {
                    res.json({
                        status: res.statusCode,
                        message: 'Fetch Profile Successfully',
                        meta: null,
                        data: {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                            createdAt: user.createdAt,
                        },
                    });
                }
                else {
                    res.status(404);
                    throw new Error('User not found');
                }
                return [2 /*return*/];
        }
    });
}); });
exports.userById = userById;
/**
 * Search for users by name, email, or role.
 * @route GET /api/users/search
 * @group Users - Operations related to users
 * @param {string} [name.query] - The name to search for.
 * @param {string} [email.query] - The email to search for.
 * @param {string} [role.query] - The role to search for.
 * @returns {object} 200 - An array of user profiles matching the search criteria.
 * @returns {object} 400 - Bad request if neither name, email, nor role is provided.
 * @returns {object} 404 - Not found if no users match the search criteria.
 * @returns {Error} 500 - Internal server error.
 */
var searchUserByQuery = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, role, query, nameRegex, users, responseData, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, name = _a.name, email = _a.email, role = _a.role;
                // Check if both name and email are provided
                // if (name && email) {
                //     res.status(400).json({
                //         status: res.statusCode,
                //         message:
                //             'Please provide either a name or an email, not both, for the search',
                //         meta: null,
                //         data: null,
                //     });
                // }
                if (!name && !email && !role) {
                    res.status(400).json({
                        status: res.statusCode,
                        message: 'Please provide a name, email, or role for the search',
                        meta: null,
                        data: null,
                    });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                query = {};
                if (name) {
                    nameRegex = new RegExp(name.toString(), 'i');
                    query.name = { $regex: nameRegex };
                }
                if (email) {
                    query.email = email;
                }
                if (role) {
                    query.role = role;
                }
                return [4 /*yield*/, users_model_1.default.find(query)];
            case 2:
                users = _b.sent();
                if (users.length > 0) {
                    responseData = users.map(function (user) { return ({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        createdAt: user.createdAt,
                    }); });
                    res.json({
                        status: res.statusCode,
                        message: 'Fetch Profiles Successfully',
                        meta: null,
                        data: responseData,
                    });
                }
                else {
                    res.status(404).json({
                        status: res.statusCode,
                        message: 'No users found',
                        meta: null,
                        data: null,
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error('Error searching for users:', error_1);
                res.status(500).json({
                    status: res.statusCode,
                    message: 'Internal server error',
                    meta: null,
                    data: null,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.searchUserByQuery = searchUserByQuery;
var UserRole;
(function (UserRole) {
    UserRole["All"] = "all";
    UserRole["Freemium"] = "freemium";
    UserRole["Premium"] = "premium";
    UserRole["Platinum"] = "platinum";
    UserRole["Editor"] = "editor";
})(UserRole || (UserRole = {}));
/**
 * Fetch all users based on the specified role.
 * @route GET /api/users
 * @group Users - Operations related to users
 * @param {string} [role.query] - The role of the users to fetch. Possible values are 'all', 'freemium', 'premium', 'platinum', or 'editor'.
 * @param {number} [page.query=1] - The page number for pagination. Default is 1.
 * @param {number} [size.query=10] - The number of users to fetch per page. Default is 10.
 * @returns {object} 200 - An object containing information about the fetched users.
 * @returns {object} 400 - Bad request if an invalid role or page number is provided.
 * @returns {object} 500 - Internal server error if an error occurs while fetching users.
 */
var getAllUsers = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, role, _b, page, _c, size, query, usersCount, totalPages, users, error_2;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.query, role = _a.role, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.size, size = _c === void 0 ? 10 : _c;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 4, , 5]);
                query = {};
                if (role === 'all') {
                }
                else if (role === 'freemium' ||
                    role === 'premium' ||
                    role === 'platinum' ||
                    role === 'editor') {
                    query = { role: role };
                }
                else {
                    res.status(400).json({
                        status: res.statusCode,
                        message: 'Invalid role',
                        meta: null,
                        data: null,
                    });
                }
                return [4 /*yield*/, users_model_1.default.countDocuments(query)];
            case 2:
                usersCount = _d.sent();
                totalPages = Math.ceil(usersCount / size);
                if (page > totalPages) {
                    res.status(400).json({
                        status: res.statusCode,
                        message: 'Invalid page number',
                        meta: null,
                        data: null,
                    });
                }
                return [4 /*yield*/, users_model_1.default.find(query)
                        .select('-password')
                        .skip((page - 1) * size)
                        .limit(Number(size))];
            case 3:
                users = _d.sent();
                console.log(users);
                res.status(200).json({
                    status: 'success',
                    message: 'Users fetched successfully',
                    meta: null,
                    data: {
                        total: usersCount,
                        perPage: size,
                        page: Number(page),
                        totalPages: totalPages,
                        users: users,
                    },
                });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _d.sent();
                res.status(500).json({
                    status: res.statusCode,
                    message: 'An error occurred while fetching users',
                    meta: null,
                    data: null,
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.getAllUsers = getAllUsers;
