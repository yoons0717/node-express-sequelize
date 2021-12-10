import { Sequelize } from 'sequelize';
import { tutorialFactory } from './tutorial.model';
import { config } from '../../database/config/db.config';

export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
  }
);

export const Tutorial = tutorialFactory(sequelize);
