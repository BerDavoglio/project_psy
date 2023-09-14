import Sequelize, { Model } from 'sequelize';

export default class Conquest extends Model {
  static init(sequelize) {
    super.init({
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
