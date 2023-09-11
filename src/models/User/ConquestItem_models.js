import Sequelize, { Model } from 'sequelize';

export default class ConquestItem extends Model {
  static init(sequelize) {
    super.init({
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      conquest: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
