import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Insert connection config in models
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
