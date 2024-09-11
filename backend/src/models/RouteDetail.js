const mongoose = require('mongoose')

const routeDetailSchema = new mongoose.Schema({
    RouteName: { type: String, maxlength: 500 },
    RouteDetail: { type: String, required: true },
    RouteFee: { type: mongoose.Decimal128, default: 0 },
    RouteDistance: { type: mongoose.Decimal128, default: 0 }
  });

  const RouteDetail = mongoose.model('RouteDetails', routeDetailSchema);
  module.exports = RouteDetail;
  