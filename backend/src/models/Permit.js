
const mongoose= require('mongoose')

const permitSchema = new mongoose.Schema({
    PermitNumber: { type: String, required: true, maxlength: 50 },
    PermitIssueDate: { type: Date, required: true },
    AttachedDocuments: { type: String },
    VehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicles', required: true },
    Others: { type: String }
  });
  
  const Permit = mongoose.model('Permits', permitSchema);
  module.exports = Permit;
  