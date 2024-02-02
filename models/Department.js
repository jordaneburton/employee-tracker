const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class department extends Model {}

department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    department_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = department;