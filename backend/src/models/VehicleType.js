const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const VehicleType = sequelize.define('VehicleType', {
  Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING(250), allowNull: false,unique:true},
  Remarks: { type: DataTypes.STRING(250)},
},{
  timestamps:false,
  modelName:'VehicleType'
});
module.exports = VehicleType;