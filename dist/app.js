"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

require('./database');

var _user_routes = require('./routes/User/user_routes'); var _user_routes2 = _interopRequireDefault(_user_routes);
var _conquests_routes = require('./routes/User/conquests_routes'); var _conquests_routes2 = _interopRequireDefault(_conquests_routes);
var _jwt_routes = require('./routes/User/jwt_routes'); var _jwt_routes2 = _interopRequireDefault(_jwt_routes);
var _calendars_routes = require('./routes/Admin/calendars_routes'); var _calendars_routes2 = _interopRequireDefault(_calendars_routes);
var _doctors_routes = require('./routes/Admin/doctors_routes'); var _doctors_routes2 = _interopRequireDefault(_doctors_routes);

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use('/images', _express2.default.static(_path2.default.join(__dirname, './images')));
  }

  routes() {
    this.app.use('/users/', _user_routes2.default);
    this.app.use('/jwt/', _jwt_routes2.default);
    this.app.use('/conquests/', _conquests_routes2.default);
    this.app.use('/admin/calendars/', _calendars_routes2.default);
    this.app.use('/admin/doctors/', _doctors_routes2.default);
  }
}

exports. default = new App().app;
