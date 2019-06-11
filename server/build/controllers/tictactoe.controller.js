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
            console.log('hoal');
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
            let updatePartida = req.body;
            const conn = yield database_1.connect();
            yield conn.query('UPDATE partida SET ? WHERE id = ?', [updatePartida, id]);
            updatePartida = calcularJugada(updatePartida);
            const resultado = calcularResultado(updatePartida);
            switch (resultado) {
                case 1:
                    updatePartida.resultado = 'Ganado por Jugador';
                    break;
                case 2:
                    updatePartida.resultado = 'Ganado por Computador';
                    break;
                case 3:
                    updatePartida.resultado = 'Empate';
                    break;
                default:
                    break;
            }
            yield conn.query('UPDATE partida SET ? WHERE id = ?', [updatePartida, id]);
            return res.json({
                message: 'Partida Actualizada',
                value: id,
                result: resultado
            });
        });
    }
}
const calcularJugada = (partida) => {
    let partidaRes = partida;
    let cambiado = false;
    while (!cambiado) {
        let casillaCambio = Math.floor(Math.random() * 9) + 1;
        switch (casillaCambio) {
            case 1:
                if (partidaRes.casilla1 == '0') {
                    partidaRes.casilla1 = '2';
                    cambiado = true;
                }
                break;
            case 2:
                if (partidaRes.casilla2 == '0') {
                    partidaRes.casilla2 = '2';
                    cambiado = true;
                }
                break;
            case 3:
                if (partidaRes.casilla3 == '0') {
                    partidaRes.casilla3 = '2';
                    cambiado = true;
                }
                break;
            case 4:
                if (partidaRes.casilla4 == '0') {
                    partidaRes.casilla4 = '2';
                    cambiado = true;
                }
                break;
            case 5:
                if (partidaRes.casilla5 == '0') {
                    partidaRes.casilla5 = '2';
                    cambiado = true;
                }
                break;
            case 6:
                if (partidaRes.casilla6 == '0') {
                    partidaRes.casilla6 = '2';
                    cambiado = true;
                }
                break;
            case 7:
                if (partidaRes.casilla7 == '0') {
                    partidaRes.casilla7 = '2';
                    cambiado = true;
                }
                break;
            case 8:
                if (partidaRes.casilla8 == '0') {
                    partidaRes.casilla8 = '2';
                    cambiado = true;
                }
                break;
            case 9:
                if (partidaRes.casilla9 == '0') {
                    partidaRes.casilla9 = '2';
                    cambiado = true;
                }
                break;
        }
    }
    return partidaRes;
};
const calcularResultado = (partida) => {
    //termino el partido verifico resultado
    //8 combinatorias ganadores del jugador
    if (partida.casilla1 == '1' && partida.casilla2 == '1' && partida.casilla3 == '1')
        return 1;
    if (partida.casilla4 == '1' && partida.casilla5 == '1' && partida.casilla6 == '1')
        return 1;
    if (partida.casilla7 == '1' && partida.casilla8 == '1' && partida.casilla9 == '1')
        return 1;
    if (partida.casilla1 == '1' && partida.casilla4 == '1' && partida.casilla7 == '1')
        return 1;
    if (partida.casilla2 == '1' && partida.casilla5 == '1' && partida.casilla8 == '1')
        return 1;
    if (partida.casilla3 == '1' && partida.casilla6 == '1' && partida.casilla9 == '1')
        return 1;
    if (partida.casilla1 == '1' && partida.casilla5 == '1' && partida.casilla9 == '1')
        return 1;
    if (partida.casilla3 == '1' && partida.casilla5 == '1' && partida.casilla7 == '1')
        return 1;
    //8 combinatorias ganadores del jugador
    if (partida.casilla1 == '2' && partida.casilla2 == '2' && partida.casilla3 == '2')
        return 2;
    if (partida.casilla4 == '2' && partida.casilla5 == '2' && partida.casilla6 == '2')
        return 2;
    if (partida.casilla7 == '2' && partida.casilla8 == '2' && partida.casilla9 == '2')
        return 2;
    if (partida.casilla1 == '2' && partida.casilla4 == '2' && partida.casilla7 == '2')
        return 2;
    if (partida.casilla2 == '2' && partida.casilla5 == '2' && partida.casilla8 == '2')
        return 2;
    if (partida.casilla3 == '2' && partida.casilla6 == '2' && partida.casilla9 == '2')
        return 2;
    if (partida.casilla1 == '2' && partida.casilla5 == '2' && partida.casilla9 == '2')
        return 2;
    if (partida.casilla3 == '2' && partida.casilla5 == '2' && partida.casilla7 == '2')
        return 2;
    else if (partida.casilla1 != '0' && partida.casilla2 != '0' && partida.casilla3 != '0' && partida.casilla4 != '0' && partida.casilla5 != '0' &&
        partida.casilla6 != '0' && partida.casilla7 != '0' && partida.casilla8 != '0' && partida.casilla9 != '0')
        return 3;
};
const tictactoeController = new TicTacToeController();
exports.default = tictactoeController;
