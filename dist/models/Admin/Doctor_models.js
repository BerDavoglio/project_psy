"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Doctor extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      description: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
      },
      specialization: {
        type: _sequelize2.default.ENUM('Psiquiatria', 'Psiquiatria Forense'),
        defaultValue: '',
      },
      image: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Doctor;
