

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
  const getVehicleById = async (req, res) => {

    const ijajatNumber=decodeURIComponent(req.params.ijajat)
    console.log(ijajatNumber)
    // try {
    //   const vehicle = await routeVehicleService.getVehicleById(ijajatNumber);
    //   if(vehicle.length!==0){
    //     res.status(201).json(vehicle);

    //   }
    //   else{
    //     res.status(400).json({
    //       msg:"No Data Found"
    //     })
    //   }
    // } catch (error) {
    //   res.status(400).json({ error: error.message });
    // }
  };

  module.exports={
     createVehicle,
     getAllVehicles,
     getVehicleById

  }

  
  