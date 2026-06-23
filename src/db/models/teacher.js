import { DataTypes,Model } from "sequelize";
import { db } from "../../lib/db.js";

export class Teacher extends Model{};

Teacher.init(
  {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull:false
      },
      t_class:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password:{
        type: DataTypes.STRING,
        allowNull: true
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
modelName:'Teacher',
});