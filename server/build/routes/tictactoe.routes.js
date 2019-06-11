"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tictactoe_controller_1 = __importDefault(require("../controllers/tictactoe.controller"));
class TicTacToeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tictactoe_controller_1.default.get);
        this.router.get('/:id', tictactoe_controller_1.default.getById);
        this.router.post('/', tictactoe_controller_1.default.create);
        this.router.put('/:id', tictactoe_controller_1.default.update);
    }
}
exports.default = new TicTacToeRoutes().router;
