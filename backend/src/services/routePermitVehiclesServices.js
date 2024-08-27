
const RouteVehilce = require('../models/routePermitVehcilesEntity')
//new creation
const createVehicle = async (vehicleData) => {
    try {
      const vehicle = await RouteVehilce.create(vehicleData);
      return vehicle
    } catch (error) {
    throw new Error(error.message);
    }
  };
  module.exports={
    createVehicle
  }