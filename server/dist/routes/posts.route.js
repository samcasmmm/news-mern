"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var posts_controller_1 = require("@/controllers/posts.controller");
var auth_middleware_1 = require("@/middlewares/auth.middleware");
var router = express_1.default.Router();
router.get('/health', posts_controller_1.health);
router.post('/create', auth_middleware_1.protect, posts_controller_1.createNewPost);
router.get('/', posts_controller_1.getAllPosts);
router.get('/:id', auth_middleware_1.protect, posts_controller_1.getPostById);
router.post('/');
router.put('/');
router.delete('/');
exports.default = router;
