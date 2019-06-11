"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class TicTacToeController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const partidas = yield conn.query('Select * From partida');
            return res.json(partidas[0]);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const conn = yield database_1.connect();
            const partida = yield conn.query('SELECT * FROM partida WHERE id = ?', [id]);
            return res.json(partida[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPartida = req.body;
            const conn = yield database_1.connect();
            const result = yield conn.query('INSERT INTO partida SET?', [newPartida]);
            return res.json({
                message: 'Partida Creada',
                value: result[0]
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const updatePartida = req.body;
            const conn = yield database_1.connect();
            yield conn.query('UPDATE partida SET ? WHERE id = ?', [updatePartida, id]);
            return res.json({
                message: 'Partida Actualizada'
            });
        });
    }
}
const calcularJugada = () => {
    return false;
};
const tictactoeController = new TicTacToeController();
exports.default = tictactoeController;
