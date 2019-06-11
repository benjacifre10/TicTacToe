import express, { Router } from 'express';
import tictactoeController from '../controllers/tictactoe.controller';

class TicTacToeRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', tictactoeController.get);
        this.router.post('/', tictactoeController.create);
        this.router.put('/:id', tictactoeController.update);
    }
}

export default new TicTacToeRoutes().router;