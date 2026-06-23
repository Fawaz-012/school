import { db } from "../../lib/db.js"
import {Course} from "./course.js"
import {Teacher} from "./teacher.js"
import { Student } from "./student.js"
// Association

// A teacher can teach many courses
Teacher.hasMany(Course,{
  foreignKey: "teacherId",
  as: "Courses"
});

Course.belongsTo(Teacher,{
  foreignKey: "teacherId"
});

export const iniDb = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been eestablished successfully")
  } catch (error) {
    console.error("Database connection failed")
  }
}

export {Teacher,Course,Student};

// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../../config/database.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
