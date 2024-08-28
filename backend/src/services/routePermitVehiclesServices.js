
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

  const getAllVehicles= async()=>{
    try {
      const vehicles= await RouteVehilce.findAll()
       return vehicles
  }
    catch(error){
      throw new Error(error.message)
    }
  }
  module.exports={
    createVehicle,
    getAllVehicles
  }