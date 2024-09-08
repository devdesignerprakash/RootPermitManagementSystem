const {DataTypes}=require('sequelize')
const sequelize= require ('../config/db')

const UserDetails = sequelize.define('UserDetail', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Email: { type: DataTypes.STRING(250), allowNull: false },
    ContactNumber: { type: DataTypes.STRING(50), allowNull: false },
    Password: { type: DataTypes.STRING(100), allowNull: false },
    UserType: { 
      type: DataTypes.STRING(50), 
      allowNull: false, 
      validate: { isIn: [['Admin', 'User', 'SuperUser', 'Guest']] } 
    }
  },
{
  timestamp: false,
  tableName: 'UserDetail',
});
   module.exports = UserDetails;