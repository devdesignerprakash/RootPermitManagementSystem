const VehicleType = require('../models/VehicleTypes')
const VehcileTypeServices = require('../services/VehicleTypeService')

class VehicleTypesControllers{
    async createVehicleType(req, res) {
        try {
            const vehicleType = await VehicleType.findOne({ where: { Name: req.body.Name } });
    
            if (!vehicleType) {
                await VehcileTypeServices.createVehcileType(req.body);
                res.status(201).json({
                    msg: "Vehicle Type Created Successfully"
                });
            } else {
                res.status(409).json({
                    msg: "Vehicle Type already exists"
                });
            }
        } catch (error) {
            console.error("Error creating vehicle type:", error);
            res.status(500).json({
                msg: "An error occurred",
                error: error.message
            });
        }
    }
    async getAllVehicleTypes(req,res) {
        try{
        const vehicleTypes= await VehcileTypeServices.getAllVehicleType()
        if(vehicleTypes){
            res.status(201).json({
                data:vehicleTypes
            })
        }
        else{
            res.status(404).json({
                msg:"No data Found"
            })
        }
        }
        catch(error){
            throw new Error(error)
        }   
    }
    async getVehicleType(req,res) {
        try{
            const vehicleType= await VehicleType.findOne({where:{Id:req.params.id}})
            if(vehicleType){
                 const vehicleType= await VehcileTypeServices.getVehicleTypeById(req.params.id)
                 res.status(201).json({
                    data:vehicleType
                 })
                }else{
                    res.status(404).json({
                        msg:"No data Found"
                    })
                }
            }
        catch(error){
            throw new Error(error)
        }   
    }
    async updateVehicleType(req,res){
        try{
            const vehicleType= await VehicleType.findOne({where:{Id:req.params.id}})
            if(vehicleType){
                 await VehcileTypeServices.updateVehicleType(req.params.id,req.body)      
                 res.status(201).json({
                    msg:"Vehicle Type Updated Successfully"
                 })
                }else{
                    res.status(404).json({
                        msg:"No data Found"
                    })
                }
            }
        catch(error){
            throw new Error(error)
        }   
    }
 async deleteVehicleType(req,res){
    try{
        const vehicleType= await VehicleType.findOne({where:{Id:req.params.id}})
        if(vehicleType){
             await VehcileTypeServices.deleteVehicleType(req.params.id)      
             res.status(201).json({
                msg:"Vehicle Type deleted Successfully"
             })
            }else{
                res.status(404).json({
                    msg:"No data Found"
                })
            }
        }
    catch(error){
        throw new Error(error)
    }   

 }
}

module.exports= new VehicleTypesControllers()