import Sequelize, { Model } from 'sequelize';

export default class Doctor extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      specialization: {
        type: Sequelize.ENUM('Psiquiatria', 'Psiquiatria Forense'),
        defaultValue: '',
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
