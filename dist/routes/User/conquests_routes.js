"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _conquest_controller = require('../../controllers/User/conquest_controller'); var _conquest_controller2 = _interopRequireDefault(_conquest_controller);

var _login_required = require('../../middlewares/login_required'); var _login_required2 = _interopRequireDefault(_login_required);
var _is_admin = require('../../middlewares/is_admin'); var _is_admin2 = _interopRequireDefault(_is_admin);

const router = new (0, _express.Router)();

router.post('/', _login_required2.default, _is_admin2.default, _conquest_controller2.default.store); // Create
router.get('/', _login_required2.default, _conquest_controller2.default.show); // Get All
router.put('/:id', _login_required2.default, _is_admin2.default, _conquest_controller2.default.update); // Update
router.delete('/:id', _login_required2.default, _is_admin2.default, _conquest_controller2.default.delete); // Delete

exports. default = router;
