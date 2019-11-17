import { Application } from 'express';

import FrontController from '../Controller/FrontController';

export default class Routes {
    public frontController: FrontController = new FrontController();

    public routes(app: Application): void {
      app.route('/').get(this.frontController.home);
      app.route('/login').all(this.frontController.authentication);
    }
}
