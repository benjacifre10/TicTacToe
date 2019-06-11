import { Request, Response } from 'express';
import { connect } from '../database';
import { Partida } from '../interfaces/partida.interface';
import { json } from 'body-parser';

class TicTacToeController {
    
    public async get(req: Request, res: Response): Promise<Response> {
        const conn = await connect();
        const partidas = await conn.query('Select * From partida');
        return res.json(partidas[0]);
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const conn = await connect();
        const partida = await conn.query('SELECT * FROM partida WHERE id = ?', [id]);
        return res.json(partida[0]);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const newPartida: Partida = req.body;
        const conn = await connect();
        const result = await conn.query('INSERT INTO partida SET?', [newPartida]);
        return res.json({
            message: 'Partida Creada',
            value: result[0]
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