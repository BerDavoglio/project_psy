"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Calendar extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      date: {
        type: _sequelize2.default.DATE,
        defaultValue: new Date(),
      },
      patient_id: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      description: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
      },
      doctor_id: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      is_finished: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Calendar;
