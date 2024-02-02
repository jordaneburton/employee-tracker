const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.DECIMAL
    },
    department_id: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = Role;