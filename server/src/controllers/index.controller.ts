import { Request, Response } from 'express';

class IndexController {
    public index = (req: Request, res: Response): Response => {
        return res.json({text: 'API is /api/tictactoe'});
    }
}

export const indexController = new IndexController();