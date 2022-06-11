import express, { Application } from 'express';
import userRoutes from '../routes/user';
import cors from 'cors';

class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Initial Methods
        this.middlewares();
        this.routes();
    }

    middlewares() {
        
        // CORS
        this.app.use( cors() );

        // BODY READING
        this.app.use( express.json() );

        // PUBLIC FOLDER
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto!!! ${this.port}`);
        })
    }
}

export default Server;