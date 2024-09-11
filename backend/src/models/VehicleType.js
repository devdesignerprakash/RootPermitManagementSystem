
const mongoose= require('mongoose')


const vehicleTypeSchema = new mongoose.Schema({
    Name: { type: String, required: true, maxlength: 100 },
    Remarks: { type: String, maxlength: 250 }
  });
  const VehicleType = mongoose.model('VehicleType', vehicleTypeSchema);
  module.exports = VehicleType;