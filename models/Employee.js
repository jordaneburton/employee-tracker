const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class employee extends Model {}

employee.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER
    },
    manager_id: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = employee;