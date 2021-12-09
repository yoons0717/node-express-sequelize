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
console.log('tutorial', tutorialFactory(sequelize));

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
