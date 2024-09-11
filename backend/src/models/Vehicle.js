const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema({
  Number: { type: String, required: true, maxlength: 50 },
  RegisteredDate: {
    type: Date,
    required: true,
    VehicleTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VehicleType",
      required: true,
    },
  },
  EngineNumber: { type: String, required: true, maxlength: 50 },
  ChassisNumber: { type: String, required: true, maxlength: 50 },
  Model: { type: String, required: true, maxlength: 50 },
  Manufacturer: { type: String, required: true, maxlength: 250 },
  ManufacturedYear: { type: Number, required: true },
  VehicleWeight: { type: mongoose.Decimal128 },
  WeightCapacity: { type: mongoose.Decimal128 },
  SeatCapacity: { type: Number, required: true },
  VehicleOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VehicleOwner",
    required: true,
  },
  YatayatSewaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "YatayatSewa",
    required: true,
  },
  TicketCounterAddress: { type: String, maxlength: 250 },
  ParkingAddress: { type: String, maxlength: 250 },
  Remarks: { type: String },
  Driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmployeeDetail",
    required: true,
  },
  Helper: { type: mongoose.Schema.Types.ObjectId, ref: "EmployeeDetail" },
  Other: { type: mongoose.Schema.Types.ObjectId, ref: "EmployeeDetail" },
  FuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric"],
  },
  Others: { type: String, maxlength: 500 },
});

const Vehicle = mongoose.model("Vehicles", vehicleSchema);
module.exports = Vehicle;
