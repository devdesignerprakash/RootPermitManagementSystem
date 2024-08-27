

const routeVehicleService= require ('../services/routePermitVehiclesServices')
const createVehicle = async (req, res) => {
    try {
      const routevehicle = await routeVehicleService.createVehicle(req.body);
      res.status(201).json(routevehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports={
     createVehicle,

  }

  
  