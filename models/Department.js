const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init(
  {
    department_id: {
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

module.exports = Department;