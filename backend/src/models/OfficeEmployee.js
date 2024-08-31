const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OfficeEmployee = sequelize.define('OfficeEmployee', {
  Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  EmployeeName: { type: DataTypes.STRING(250), allowNull: false },
  Post: { type: DataTypes.STRING(250), allowNull: false },
  CanApprove: { type: DataTypes.BOOLEAN, defaultValue: false },
  SanketNumber: { type: DataTypes.STRING(50) }
});

module.exports = OfficeEmployee;