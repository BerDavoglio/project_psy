"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable class-methods-use-this */
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _User_models = require('../../models/User/User_models'); var _User_models2 = _interopRequireDefault(_User_models);

class JWTController {
  // Make the Token for User
  async store(req, res) {
    try {
      const {
        email,
        password,
      } = req.body;
      if (!email || !password) {
        return res.status(401)
          .json({ errors: ['Unauthorized'] });
      }

      const user = await _User_models2.default.findOne({ where: { email } });
      if (!user) {
        return res.status(401)
          .json({ errors: ['User does not exist!'] });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401)
          .json({ errors: ['Wrong password'] });
      }

      const {
        id,
        role,
      } = user;
      const token = _jsonwebtoken2.default.sign({
        id,
        email,
        role,
      }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({ token });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

exports. default = new JWTController();
