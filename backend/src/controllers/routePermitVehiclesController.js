

const routeVehicleService= require ('../services/routePermitVehiclesServices')
const createVehicle = async (req, res) => {
    try {
      const routevehicle = await routeVehicleService.createVehicle(req.body);
      res.status(201).json(routevehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  const getAllVehicles = async (req, res) => {
    try {
      const vehicles = await routeVehicleService.getAllVehicles();
      if(vehicles.length!==0){
        res.status(201).json(vehicles);

      }
      else{
        res.status(400).json({
          msg:"No Data Found"
        })
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports={
     createVehicle,
     getAllVehicles

  }

  
  