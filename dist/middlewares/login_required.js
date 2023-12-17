"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User_models = require('../models/User/User_models'); var _User_models2 = _interopRequireDefault(_User_models);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401)
      .json({ errors: ['Login Required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const {
      id,
      email,
      role,
    } = data;

    const user = await _User_models2.default.findOne({
      where: {
        id,
        email,
      },
    });
    if (!user) {
      return res.status(401)
        .json({ errors: ['Invalid Token'] });
    }

    req.userId = id;
    req.userEmail = email;
    req.userRole = role;

    return next();
  } catch (e) {
    return res.status(401)
      .json({ errors: ['[LOGINREQUIRED] Invalid Token'] });
  }
};
