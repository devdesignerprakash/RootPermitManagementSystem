const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const VehicleEmployee = sequelize.define("VehicleEmployee", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  EmployeeName: { type: DataTypes.STRING(250), allowNull: false },
  EmployeeAddress: { type: DataTypes.STRING(250), allowNull: false },
  EmployeeContact: { type: DataTypes.STRING(250) },
  EmployeeLicenceNumber: { type: DataTypes.STRING(250), allowNull: false },
  EmployeeLicenceIssuer: { type: DataTypes.STRING(250), allowNull: false },
});
module.exports= VehicleEmployee;