"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _doctor_controller = require('../../controllers/Admin/doctor_controller'); var _doctor_controller2 = _interopRequireDefault(_doctor_controller);

var _login_required = require('../../middlewares/login_required'); var _login_required2 = _interopRequireDefault(_login_required);
var _is_admin = require('../../middlewares/is_admin'); var _is_admin2 = _interopRequireDefault(_is_admin);
var _storage_images = require('../../middlewares/storage_images'); var _storage_images2 = _interopRequireDefault(_storage_images);

const router = new (0, _express.Router)();

router.post('/', _login_required2.default, _is_admin2.default, _storage_images2.default, _doctor_controller2.default.store); // Create
router.get('/', _doctor_controller2.default.show); // Get All
router.get('/docidname/', _doctor_controller2.default.indexOnlyId); // Get All
router.put('/:id', _login_required2.default, _is_admin2.default, _doctor_controller2.default.update); // Update
router.delete('/:id', _login_required2.default, _is_admin2.default, _doctor_controller2.default.delete); // Delete

exports. default = router;
