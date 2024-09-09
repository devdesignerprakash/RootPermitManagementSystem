const VehicleServices= require('../services/VehicleService')

class VehicleControllers{
        async createVehicle(req,res){
            try{
                  const vehicleData = {
                    Number,
                    RegistrationDate: new Date(RegistrationDate),
                    EngineNumber,
                    ChassisNumber,
                    Model,
                    Manufacturer,
                    ManufacturedYear: parseInt(ManufacturedYear, 10),
                    VehicleWeight: parseFloat(VehicleWeight),
                    WeightCapacity: parseFloat(WeightCapacity),
                    SeatCapacity: parseInt(SeatCapacity, 10),
                    VehicleOwnerId: req.existingVehicleOwner ? req.existingVehicleOwner.Id : (req.newVehicleOwner ? req.newVehicleOwner.Id : null),
                    YatayatSewaId: req.existingYatayatSewa ? req.existingYatayatSewa.Id : (req.newYatayatSewa ? req.newYatayatSewa.Id : null),
                    TicketCounterAddress,
                    ParkingAddress,
                    Remarks,
                    Driver: req.existingDriver ? req.existingDriver.Id : (req.newDriver ? req.newDriver.Id : null),
                    Helper: req.existingHelper ? req.existingHelper.Id : (req.newHelper ? req.newHelper.Id : null),
                    Other: req.existingOther ? req.existingOther.Id : (req.newOther ? req.newOther.Id : null),
                    FuelType,
                    Others,
                  };            
                const newVehicle = await VehicleServices.createVehicle(vehicleData);
                if(newVehicle){
                    res.status(201).json(newVehicle)
                }
                else {
                    return res.status(400).send({ message: 'Failed to create Vehicle' });}
            }catch(error){
                throw new Error(error)
            }
        }

}
module.exports= new VehicleControllers()