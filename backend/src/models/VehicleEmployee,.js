
const mongoose = require('mongoose')
const vehcileEmployeeDetailsSchema = new mongoose.Schema({
    EmployeeName: { type: String, required: true, maxlength: 250 },
    EmployeeAddress: { type: String, required: true, maxlength: 250 },
    EmployeeContact: { type: String, maxlength: 50 },
    EmployeeLicenceNumber: { type: String, required: true, maxlength: 50 },
    EmployeeLicenceIssuer: { type: String, maxlength: 250 }
  });
  
  const VehicleEmployeeDetail = mongoose.model('VehicleEmployeeDetail', vehicleEmployeeDetailsSchema);
  module.exports = VehicleEmployeeDetail;
  