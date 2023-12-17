"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _jwt_controller = require('../../controllers/User/jwt_controller'); var _jwt_controller2 = _interopRequireDefault(_jwt_controller);

const router = new (0, _express.Router)();

router.post('/', _jwt_controller2.default.store);

exports. default = router;
