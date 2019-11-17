import express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import Routes from './Config/Routes';
import Database from './Config/Database';

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
      this.app = express();
      this.config();
      this.routePrv.routes(this.app);
      this.app.set('db', new Database());
    }

    private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.set('view engine', 'twig');
      this.app.set('views', path.join(__dirname, 'views'));
    }
}

export default new App().app;
