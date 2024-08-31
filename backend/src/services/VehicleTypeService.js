const VehicleTypes = require('../models/VehicleTypes')
class VehcileTypeServices{
    async createVehcileType(vehicleTypeData){
        return await VehicleTypes.create(vehicleTypeData)
    }
    async getAllVehicleType(){
        return await VehicleTypes.findAll()
    }
    async getVehicleTypeById(id){
        return await VehicleTypes.findOne({where:{Id:id}})
    }
    async updateVehicleType(vehicleType, id){
        return await VehicleTypes.update(vehicleType,{where:{Id:id}})
    }
    async deleteVehicleType(id){
        return await VehicleTypes.destroy({where:{Id:id}})
    }
}
module.exports= new VehcileTypeServices()