/* eslint-disable no-console */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User/User_models';
import Conquest from '../models/User/Conquest_models';
import Calendar from '../models/Admin/Calendar_models';
import Doctor from '../models/Admin/Doctor_models';

const models = [User, Conquest, Calendar, Doctor];
const connection = new Sequelize(databaseConfig);

connection.authenticate()
  .then(() => {
    console.log('Connection Complete');
  })
  .catch(() => {
    console.log('Connection Erro');
  });

models.forEach((model) => model.init(connection));
