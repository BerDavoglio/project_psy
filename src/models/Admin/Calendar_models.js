import Sequelize, { Model } from 'sequelize';

export default class Calendar extends Model {
  static init(sequelize) {
    super.init({
      date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      patient_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.TEXT,
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
