import { Sequelize } from "sequelize";
import { config } from "./env.js";


export const db = new Sequelize (config.db.name, config.db.user, config.db.pass, {
  host: 'localhost',
  dialect: 'postgres'
});