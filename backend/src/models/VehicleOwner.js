const {DataTypes}= require('sequelize')
const sequelize= require('../config/db')

const VehicleOwner = sequelize.define('VehicleOwner',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    OwnerName: {type:DataTypes.STRING(250), allowNull:false},
    Address:{type:DataTypes.STRING(250)},
    Contact:{type:DataTypes.STRING(50)},
    VehicleManagementPerson:{type:DataTypes.STRING(250)},
    AddressManagementPerson:{type:DataTypes.STRING(250)}
},{
    timestamps: false,
    tableName: 'VehicleOwner',
})
module.exports= VehicleOwner;