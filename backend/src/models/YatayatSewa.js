
const {DataTypes}= require('sequelize')
const sequelize= require('../config/db')

const YatayatSewa= sequelize.define('YatayatSewa', {
    Id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    YatayatSewaName:{type:DataTypes.STRING(250), allowNull:false, unique:true },
    RegistrationDate:{type:DataTypes.DATE, allowNull:false },
    RenewValidDate:{type:DataTypes.DATE, allowNull:false },
    RegisteredAt:{type:DataTypes.STRING(250), allowNull:false },
    Address:{type:DataTypes.STRING(250), allowNull:false },
    ContactNo:{type:DataTypes.STRING(250), allowNull:false }
},{
    tableName: 'YatayatSewa', // Ensure this matches your database table name
    timestamps: false
})

module.exports=YatayatSewa;