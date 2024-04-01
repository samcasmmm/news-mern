"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_controller_1 = require("@/controllers/users.controller");
var auth_middleware_1 = require("../middlewares/auth.middleware");
var router = express_1.default.Router();
router.get('/health', users_controller_1.health);
router.post('/signin', users_controller_1.signIn);
router.post('/signup', users_controller_1.signUp);
router.route('/profile').get(auth_middleware_1.protect, users_controller_1.profile).put(auth_middleware_1.protect, users_controller_1.updateProfile);
router.get('/profile/:id', auth_middleware_1.protect, users_controller_1.userById);
router.get('/search', auth_middleware_1.protect, users_controller_1.searchUserByQuery);
router.get('/', users_controller_1.getAllUsers);
exports.default = router;
