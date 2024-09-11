
const mongoose = require('mongoose')

const officeEmployeeSchema = new mongoose.Schema({
    EmployeeName: { type: String, required: true, maxlength: 250 },
    Post: { type: String, required: true, maxlength: 250 },
    CanApprove: { type: Boolean, default: false },
    SanketNumber: { type: String, maxlength: 50 }
  });
  
  const OfficeEmployee = mongoose.model('OfficeEmployee', officeEmployeeSchema);
  module.exports = OfficeEmployee;