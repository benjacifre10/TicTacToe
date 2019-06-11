import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes
import indexRoutes from './routes/index.routes';
import tictactoeRoutes from './routes/tictactoe.routes';

export class App {
    private app: Application;
    
    constructor(private port?: number | string) { 
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(): void {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', indexRoutes);
        this.app.use('/api/tictactoe', tictactoeRoutes);
    }
    
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port')); 
    }
}