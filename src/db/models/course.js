import { DataTypes,Model } from "sequelize";
import { db } from "../../lib/db.js";

 export class Course extends Model{};

Course.init(
  {
    id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey:true
      },
      Name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
      },
      teacherId:{
         type: DataTypes.STRING,
         allowNull: true,
         references:{model:'Teachers', key:'id'},
         onDelete: "SET NULL",
         onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  },
  {
sequelize:db,
modelName:'Course',
  })