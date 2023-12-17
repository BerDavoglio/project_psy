"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-console */
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _User_models = require('./models/User/User_models'); var _User_models2 = _interopRequireDefault(_User_models);

const { execSync } = require('child_process');

_app2.default.listen(process.env.APP_PORT, async () => {
  try {
    await execSync('npx sequelize db:migrate');
  } catch (e) {
    console.log('Server already has been migrated');
  }

  const user = await _User_models2.default.findByPk(1);
  if (!user) {
    await _User_models2.default.create({
      name: 'admin',
      email: 'admin@gmail.com',
      address: 'rua admin, 123',
      cellphone: '41900000000',
      birth: new Date(),
      cpf: '00000000000',
      role: 'admin',
      points: 1000000,
      password: 'admin123',
    });
  } else {
    console.log('Admin already has been created');
  }

  console.log('Started!');
});
