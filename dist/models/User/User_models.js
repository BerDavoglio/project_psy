"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-param-reassign */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'NAME is invalid',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'EMAIL is invalid',
          },
        },
      },
      address: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cellphone: {
        type: _sequelize2.default.STRING,
        defaultValue: 0,
      },
      birth: {
        type: _sequelize2.default.DATE,
        defaultValue: new Date(),
      },
      cpf: {
        type: _sequelize2.default.STRING,
        defaultValue: 0,
      },
      role: {
        type: _sequelize2.default.ENUM('user', 'admin'),
        defaultValue: 'user',
      },
      points: {
        type: _sequelize2.default.BIGINT,
        defaultValue: 0,
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'PASSWORD is invalid',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
