const {DataTypes, Model } = require('sequelize'); // Initialize Sequelize with PostgreSQL configuration
const sequelize=require('../config/db')


class RoutePermitVehicle extends Model {}
RoutePermitVehicle.init(
    {
      vehicleNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ijajatNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chasisNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      engineNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yatayatPraliName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicleType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      routePermitValidDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      routeDetail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      insuranceValidDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      jachpassValideDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize, // Pass the connection instance
      modelName: 'RoutePermitVehicle', // Name of the model
      tableName: 'RoutePermitVehicles', // Specify table name in the database
      timestamps: false, // Disable createdAt and updatedAt fields
    }
  );
  // Synchronize the model with the database
  sequelize.sync()
    .then(() => {
      console.log('RoutePermitVehicle table has been created');
    })
    .catch(error => {
      console.error('Error creating RoutePermitVehicle table:', error);
    });
  module.exports = RoutePermitVehicle;