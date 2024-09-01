const {DataTypes}= require('sequelize')
const sequelize= require('../config/db')

const Vehicle= sequelize.define('Vehicle',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    Number:{type:DataTypes.STRING(250), allowNull:false},
    RegistrationDate:{type:DataTypes.DATE, allowNull:false},
    VehicleTypeId:{type:DataTypes.INTEGER, references:{
        model:'VehicleType',
        key:id
    }, onDelete:"NO ACTION"},
    




})

module.exports= Vehicle