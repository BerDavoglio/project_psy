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
        type: Sequelize.ENUM('psicologia', 'psiquiatria', 'neuropsiquiatria'),
        defaultValue: '',
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
