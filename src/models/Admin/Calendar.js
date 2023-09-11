import Sequelize, { Model } from 'sequelize';

export default class Calendar extends Model {
  static init(sequelize) {
    super.init({
      date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      patient: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
