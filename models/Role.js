const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class role extends Model {}

role.init(
  {
    id: {
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

module.exports = role;