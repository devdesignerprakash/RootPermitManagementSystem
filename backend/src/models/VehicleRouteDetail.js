const mongoose = require('mongoose')

const vehicleRouteDetailSchema = new mongoose.Schema({
    VehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicles', required: true },
    PreviousRouteDetailsId: { type: mongoose.Schema.Types.ObjectId, ref: 'RouteDetails' },
    PreviousPermitNo: { type: String, maxlength: 50 },
    PreviousPermitDate: { type: Date },
    PreviousPermitValidDate: { type: Date },
    PreviousPermitIssuedBy: { type: String, maxlength: 250 },
    TransferDate: { type: Date },
    NewRouteDetailsId: { type: mongoose.Schema.Types.ObjectId, ref: 'RouteDetails', required: true },
    FitnessTestDate: { type: Date, required: true },
    FitnessTestValidity: { type: Date, required: true },
    FitnessTestOffice: { type: String, required: true, maxlength: 250 },
    InsuranceIssueDate: { type: Date, required: true },
    InsuranceValidDate: { type: Date, required: true },
    InsuranceIssuerCompany: { type: String, required: true, maxlength: 250 },
    InsuranceType: { type: String, default: 'Full', required: true },
    ApplicantName: { type: String, required: true, maxlength: 250 },
    ApplicantAddress: { type: String, required: true, maxlength: 250 },
    ApplicantContact: { type: String, maxlength: 50 },
    IsApplicantOwner: { type: Boolean, default: true },
    IsManjuriNamaAttached: { type: Boolean },
    ApplicantCitizenshipNumber: { type: String, maxlength: 50 },
    IsPermitApplicable: { type: Boolean, default: true },
    InapplicableReason: { type: String, maxlength: 500 },
    VoucherNumber: { type: String, required: true },
    VoucherAmount: { type: mongoose.Decimal128, required: true },
    VehicleRouteDate: { type: Date, default: Date.now },
    RegisteredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetails', required: true },
    Approver: { type: mongoose.Schema.Types.ObjectId, ref: 'OfficeEmployee' },
    Requester: { type: mongoose.Schema.Types.ObjectId, ref: 'OfficeEmployee' }
  });
  
  const VehicleRouteDetail = mongoose.model('VehicleRouteDetails', vehicleRouteDetailSchema);
  module.exports = VehicleRouteDetail;
  