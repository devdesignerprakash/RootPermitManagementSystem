const { checkVehicleExistorNot, checkvehicleTypeExistorNot } = require('../middlewares/Middlwares')
const VehicleServices= require('../services/VehicleService')
const VehicleTypeService = require('../services/VehicleTypeService')

class VehicleControllers{
        async createVehicle(req,res){
           
            try{
                const vehicle= checkVehicleExistorNot(req.body.Number)
                if(!vehicle){
                    const vehicleType= checkvehicleTypeExistorNot(req.body.vehicleType)
                    if(!vehicleType){
                        VehicleTypeService.createVehcileType(vehicleType)
                    }
                    
                }

            }catch(error){
                throw new Error(error)
            }
            
                

        }

}