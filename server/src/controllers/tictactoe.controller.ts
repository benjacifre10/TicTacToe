import { Request, Response } from 'express';
import { connect } from '../database';
import { Partida } from '../interfaces/partida.interface';

class TicTacToeController {
    
    public async get(req: Request, res: Response): Promise<Response> {
        const conn = await connect();
        const partidas = await conn.query('Select * From partida');
        return res.json(partidas[0]);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const newPartida: Partida = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO partida SET?', [newPartida]);
        return res.json({
            message: 'Partida Creada'
        });
    }
    
    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const updatePartida: Partida = req.body;
        const conn = await connect();
        await conn.query('UPDATE partida SET ? WHERE id = ?', [updatePartida, id]);
        return res.json({
            message: 'Partida Actualizada'
        });
    }


}

const calcularJugada = () => {
    return false;
}

const tictactoeController = new TicTacToeController();
export default tictactoeController;