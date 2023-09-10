/* eslint-disable no-console */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User/User_models';
import Newsletter from '../models/Newsletter/Newsletter_models';

const models = [User, Newsletter];
const connection = new Sequelize(databaseConfig);

connection.authenticate()
  .then(() => {
    console.log('Connection Complete');
  })
  .catch(() => {
    console.log('Connection Erro');
  });

models.forEach((model) => model.init(connection));
