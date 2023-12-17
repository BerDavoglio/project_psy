"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-console */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

var _User_models = require('../models/User/User_models'); var _User_models2 = _interopRequireDefault(_User_models);
var _Conquest_models = require('../models/User/Conquest_models'); var _Conquest_models2 = _interopRequireDefault(_Conquest_models);
var _Calendar_models = require('../models/Admin/Calendar_models'); var _Calendar_models2 = _interopRequireDefault(_Calendar_models);
var _Doctor_models = require('../models/Admin/Doctor_models'); var _Doctor_models2 = _interopRequireDefault(_Doctor_models);

const models = [_User_models2.default, _Conquest_models2.default, _Calendar_models2.default, _Doctor_models2.default];
const connection = new (0, _sequelize2.default)(_database2.default);

connection.authenticate()
  .then(() => {
    console.log('Connection Complete');
  })
  .catch(() => {
    console.log('Connection Erro');
  });

models.forEach((model) => model.init(connection));
