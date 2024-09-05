const {DataTypes}= require('sequelize')
const sequelize= require('../config/db')

const Permit= sequelize.define('Permit',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    PermitNumber:{type:DataTypes.STRING(50), allowNull:false},
    PermitIssueDate:{type:DataTypes.DATE, allowNull:false},
    AttachedDocuments:{type:DataTypes.STRING(50)},
    VehicleId: {type:DataTypes.INTEGER, references:{
        model:"Vehicle",
        key:"id",
    }, onDelete:"NO ACTION"},
    Others:{type:DataTypes.STRING(this.max)}
})
module.exports = Permit