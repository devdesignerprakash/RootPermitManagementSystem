
const mongoose = require('mongoose')

const vehicleOwnerSchema = new mongoose.Schema({
    OwnerName: { type: String, required: true, maxlength: 250 },
    Address: { type: String, maxlength: 250 },
    Contact: { type: String, maxlength: 50 },
    VehicleManagementPerson: { type: String, maxlength: 250 },
    AddressManagementPerson: { type: String, maxlength: 250 }
  });
  
  const VehicleOwner = mongoose.model('VehicleOwner', vehicleOwnersSchema);
  module.exports = VehicleOwner;
  