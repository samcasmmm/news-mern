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
exports.getAllPosts = exports.getPostById = exports.createNewPost = exports.health = void 0;
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var posts_model_1 = __importDefault(require("@/models/posts.model"));
var users_model_1 = __importDefault(require("@/models/users.model"));
var httpsException_1 = require("@/helpers/httpsException");
/**
 * Check the health of the user route.
 * @route GET /api/posts/health
 * @group posts - Operations about posts
 * @returns {object} 200 - An object indicating the health status of the user route
 * @returns {Error} 500 - Internal server error
 */
var health = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json({
            status: res.statusCode,
            message: 'Post Route health is good',
            meta: null,
            data: null,
        });
        return [2 /*return*/];
    });
}); });
exports.health = health;
/**
 * Create a new post.
 * @route POST /api/posts
 * @group Posts - Operations related to posts
 * @param {string} content.body.required - The content of the post.
 * @returns {object} 200 - The created post.
 * @returns {Error} 400 - Bad request if the content is missing.
 * @returns {Error} 500 - Internal server error.
 */
var createNewPost = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, thumbnail, author, content, author_1, post, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, title = _a.title, thumbnail = _a.thumbnail, author = _a.author, content = _a.content;
                if (!content) {
                    (0, httpsException_1.throwError)(res, httpsException_1.HTTP.BAD_REQUEST, 'Content is required');
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                author_1 = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
                return [4 /*yield*/, posts_model_1.default.create({
                        title: title,
                        thumbnail: thumbnail,
                        author: author_1,
                        content: content,
                    })];
            case 2:
                post = _c.sent();
                res.status(201).json({
                    status: res.statusCode,
                    message: 'Post created successfully',
                    meta: null,
                    data: post,
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                (0, httpsException_1.throwError)(res, httpsException_1.HTTP.INTERNAL_SERVER_ERROR, 'Error creating post');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.createNewPost = createNewPost;
/**
 * Get all posts.
 * @route GET /api/posts
 * @group Posts - Operations related to posts
 * @returns {object} 200 - An array of posts.
 * @returns {object} 500 - Internal server error.
 */
var getAllPosts = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, posts_model_1.default.find()];
            case 1:
                posts = _a.sent();
                if (posts.length === 0) {
                    res.status(404).json({
                        status: 404,
                        message: 'No posts found',
                        meta: null,
                        data: null,
                    });
                    (0, httpsException_1.throwError)(res, httpsException_1.HTTP.NOT_FOUND, 'No posts found');
                }
                else {
                    res.status(200).json({
                        status: res.statusCode,
                        message: 'Posts fetched successfully',
                        meta: null,
                        data: posts,
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                (0, httpsException_1.throwError)(res, httpsException_1.HTTP.INTERNAL_SERVER_ERROR, 'Error fetching posts');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.getAllPosts = getAllPosts;
/**
 * Get a post by ID.
 * @route GET /api/posts/{id}
 * @group Posts - Operations related to posts
 * @param {string} id.path.required - The ID of the post.
 * @returns {object} 200 - The post with the specified ID.
 * @returns {object} 404 - Not found if the post with the specified ID does not exist.
 * @returns {object} 500 - Internal server error.
 */
var getPostById = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postId, post, author, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, posts_model_1.default.findById(postId)];
            case 2:
                post = _a.sent();
                return [4 /*yield*/, users_model_1.default.findById(post === null || post === void 0 ? void 0 : post.author)];
            case 3:
                author = _a.sent();
                if (post) {
                    res.status(200).json({
                        status: res.statusCode,
                        message: 'Post found',
                        meta: null,
                        data: {
                            _id: post._id,
                            title: post.title,
                            thumbnail: post.thumbnail,
                            author: {
                                id: author === null || author === void 0 ? void 0 : author._id,
                                name: author === null || author === void 0 ? void 0 : author.name,
                                email: author === null || author === void 0 ? void 0 : author.email,
                                role: author === null || author === void 0 ? void 0 : author.role,
                            },
                            content: post.content,
                        },
                    });
                }
                else {
                    (0, httpsException_1.throwError)(res, httpsException_1.HTTP.NOT_FOUND, 'Post not found');
                }
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                console.error('Error fetching post by ID:', error_3);
                res.status(500).json({
                    status: 500,
                    message: 'Internal server error',
                    meta: null,
                    data: null,
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.getPostById = getPostById;
