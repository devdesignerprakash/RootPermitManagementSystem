const Vehicle = require("../models/Vehicle") //importing vehicleModel 
const VehicleType= require('../models/VehicleTypes') //importing VehicleTypeModel
const VehicleServices = require("../services/VehicleService")
class VehicleControllers{
        async createVehicle(req,res){ 
            try{

            }
            catch(error){
                throw new Error(error)
            }
            const vehicle = await Vehicle.findOne({where:{Number:req.body.Number}}) //checking vehicle is already registered or not
            if(!vehicle){
                const{Number,
                RegistrationDate,
                VehicleTypeName,   //vehicleTypeName from request
                EngineNumber,
                ChassisNumber,
                Model,
                Manufacturer,
                ManufacutredYear,
                VehicleWeight,
                WeightCapacity,
                SeatCapacity,
                VehicleOwnerName,
                YatayatSewaName, //
                TicketCounterAddress,
                ParkingAddress,
                Remarks,
                DriverLicenseNumber,
                DriverName,
                HelperLicenseNumber,
                HelperName,
                OtherLicenseNumber,
                OthersName,
                FuelType,
                Others,
              } = req.body;

              let vehicleType= 
          
                

            }
            else{
                res.status(409).json({
                    msg:"Vehicle Already Registered"
                })
            }

        }
    
}

module.exports= new VehicleControllers()