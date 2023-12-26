/* eslint-disable no-console */
import fs from 'fs';
import https from 'https';
import app from './app';
import User from './models/User/User_models';

const { execSync } = require('child_process');

app.listen(process.env.APP_PORT, async () => {
  try {
    await execSync('npx sequelize db:migrate');
  } catch (e) {
    console.log('Server already has been migrated');
  }

  const user = await User.findByPk(1);
  if (!user) {
    await User.create({
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

https.createServer({
  cert: fs.readFileSync('./SSL/code.crt'),
  key: fs.readFileSync('./SSL/code.key'),
}, app).listen(process.env.APP_PORT_HTTPS, () => {
  console.log('API HTTPS');
});
