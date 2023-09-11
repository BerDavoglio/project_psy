/* eslint-disable no-console */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User/User_models';
import ConquestUser from '../models/User/ConquestUser_models';
import ConquestItem from '../models/User/ConquestItem_models';
import Calendar from '../models/Admin/Calendar';
import Doctor from '../models/Admin/Doctor';

const models = [User, ConquestUser, ConquestItem, Calendar, Doctor];
const connection = new Sequelize(databaseConfig);

connection.authenticate()
  .then(() => {
    console.log('Connection Complete');
  })
  .catch(() => {
    console.log('Connection Erro');
  });

models.forEach((model) => model.init(connection));
