import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import './database';

import userRoutes from './routes/User/user_routes';
import conquestsRoutes from './routes/User/conquests_routes';
import jwtRoutes from './routes/User/jwt_routes';
import adminCalendarsRoutes from './routes/Admin/calendars_routes';
import adminDoctorsRoutes from './routes/Admin/doctors_routes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    // this.app.use('/images', express.static(path.join(__dirname, './images')));
    this.app.use('/images', express.static(path.join(__dirname, '@dist/middlewares/images')));
  }

  routes() {
    this.app.use('/users/', userRoutes);
    this.app.use('/jwt/', jwtRoutes);
    this.app.use('/conquests/', conquestsRoutes);
    this.app.use('/admin/calendars/', adminCalendarsRoutes);
    this.app.use('/admin/doctors/', adminDoctorsRoutes);
  }
}

export default new App().app;
