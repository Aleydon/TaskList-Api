import Sequelize, { Model } from 'sequelize';

class User extends Model {
  staticinit(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default User;
