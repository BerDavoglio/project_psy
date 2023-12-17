"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Conquest extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      points: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      description: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Conquest;
