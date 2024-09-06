const {DataTypes}= require('sequelize')
const sequelize= require('../config/db')

const VehicleDetail= sequelize.define('VehicleDetail',{
    Id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    RouteName:{type:DataTypes.STRING(500)},
    RouteDetail:{type:DataTypes.STRING(this.max), allowNull:false},
    RouteFee: {type:DataTypes.DECIMAL(18,2), allowNull:false, defaultValue:0},
    RouteDistance:{type:DataTypes.DECIMAL(18,2), allowNull:false, defaultValue:0}
})

module.exports = VehicleDetail