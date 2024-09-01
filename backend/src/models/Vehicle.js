const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Vehicle = sequelize.define("Vehicle", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Number: { type: DataTypes.STRING(250), allowNull: false },
  RegistrationDate: { type: DataTypes.DATE, allowNull: false },
  VehicleTypeId: {
    type: DataTypes.INTEGER,
    references: {
      model: "VehicleType",
      key: id,
    },
    onDelete: "NO ACTION",
  },
  EngineNumber: { type: DataTypes.STRING(50), allowNull: false },
  ChassisNumber: { type: DataTypes.STRING(50), allowNull: false },
  Model: { type: DataTypes.STRING(50), allowNull: false },
  Manufacturer: { type: DataTypes.STRING(250), allowNull: false },
  ManufacutredYear: { type: DataTypes.INTEGER, allowNull: false },
  VehicleWeight: { type: DataTypes.DECIMAL(18, 2) },
  WeightCapacity: { type: DataTypes.DECIMAL(18, 2) },
  SeatCapacity: { type: DataTypes.INTEGER, allowNull: false },
  VehicleOwnerId: {
    type: DataTypes.INTEGER,
    references: {
      model: "VehicleOwner",
      key: id,
    },
    onDelete: "NO ACTION",
  },
  YatayatSewaId: {
    type: DataTypes.INTEGER,
    references: {
      model: "YatayatSewa",
      key: id,
    },
    onDelete: "NO ACTION",
  },
  TicketCounterAddress: { type: DataTypes.STRING(250) },
  ParkingAddress: { type: DataTypes.STRING(250) },
  Remarks: { type: DataTypes.STRING(this.max) },
  Driver: {
    type: DataTypes.INTEGER,
    references: {
      model: "VehicleEmployee",
      key: id,
    },
    onDelete: "NO ACTION",
  },
  Helper: {
    type: DataTypes.INTEGER,
    references: {
      model: "VehicleEmployee",
      key: id,
    },
    onDelete: "NO ACTION",
  },
  Other: {
    type: DataTypes.INTEGER,
    references: {
      model: "VehicleEmployee",
      key: id,
    },
    onDelete: "NO ACTION",
  },
  FuelType: {
    type: DataTypes.STRING(15),
    validate: {
      isIn: [["Petrol", "Diesel", "Electric"]],
    },
  },
  Others: {
    type: DataTypes.STRING(500),
  },
},{
    timestamps:false
});
module.exports = Vehicle;
