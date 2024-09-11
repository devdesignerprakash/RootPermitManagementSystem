const mongoose = require('mongoose')

const yatayatSewaSchema = new mongoose.Schema({
    YatayatSewaName: { type: String, required: true, unique: true, maxlength: 250 },
    RegisteredDate: { type: Date, required: true },
    RenewValidDate: { type: Date, required: true },
    RegisteredAt: { type: String, required: true, maxlength: 250 },
    Address: { type: String, required: true, maxlength: 250 },
    ContactNo: { type: String, required: true, maxlength: 50 }
  });
  
  const YatayatSewa = mongoose.model('YatayatSewa', yatayatSewaSchema);
  module.exports = YatayatSewa;
  