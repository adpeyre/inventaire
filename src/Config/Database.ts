import { Sequelize } from 'sequelize-typescript';
import { Promise } from 'sequelize';
import User from '../Model/User';
import Item from '../Model/Item';

export default class Database extends Sequelize {
    protected ready: boolean = false;

    constructor() {
      super({
        dialect: 'sqlite',
        models: [User, Item],
      });
    }

    connect(path: string): Promise<void> {
      this.options.storage = path;
      const promise = this.authenticate();
      promise.then(() => {
        this.ready = true;
        this.sync();
      });

      return promise;
    }

    isReady(): boolean {
      return this.ready;
    }
}
