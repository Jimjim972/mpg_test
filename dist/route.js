"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
const controller = new controller_1.default();
// Routes pour les utilisateurs
router.get('/usersLeague', () => {
    console.log('getUsersLeague');
    controller.getUsersLeague;
});
router.post('/createLeague', controller.createLeague);
router.patch('/updateTeam', controller.updateTeam);
exports.default = router;
