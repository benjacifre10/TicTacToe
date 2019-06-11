"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res) => {
            return res.json({ text: 'API is /api/tictactoe' });
        };
    }
}
exports.indexController = new IndexController();
