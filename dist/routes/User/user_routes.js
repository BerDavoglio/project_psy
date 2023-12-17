"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _user_controller = require('../../controllers/User/user_controller'); var _user_controller2 = _interopRequireDefault(_user_controller);

var _login_required = require('../../middlewares/login_required'); var _login_required2 = _interopRequireDefault(_login_required);
var _is_admin = require('../../middlewares/is_admin'); var _is_admin2 = _interopRequireDefault(_is_admin);

const router = new (0, _express.Router)();

router.post('/', _user_controller2.default.store); // Create a User
router.get('/', _login_required2.default, _user_controller2.default.show); // Get User Itself
router.get('/all/', _login_required2.default, _is_admin2.default, _user_controller2.default.index); // Get User Itself
router.get('/idname/', _login_required2.default, _is_admin2.default, _user_controller2.default.indexOnlyId); // Get User Itself
router.get('/role/', _login_required2.default, _user_controller2.default.showRole); // Get User Itself
router.put('/', _login_required2.default, _user_controller2.default.update); // Update a User
router.delete('/', _login_required2.default, _user_controller2.default.delete); // Delete a User
router.put('/points/:id', _login_required2.default, _is_admin2.default, _user_controller2.default.changePoints); // Update a User
router.get('/reviews/', _user_controller2.default.requestReviews);

exports. default = router;
