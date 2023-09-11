import Sequelize, { Model } from 'sequelize';

export default class ConquestUser extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
