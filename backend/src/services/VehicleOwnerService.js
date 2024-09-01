
const VehicleOwner = require('../models/VehicleOwner')
class VehicleOwnerServices{
    async createVehicleOwner(vehicleOwnerData){
        return await VehicleOwner.create(vehicleOwnerData)
    }
    async getAllVehicleOwner(){
        return await VehicleOwner.findAll()
    }
    async getVehicleOwner(ownerName){
        return await VehicleOwner.findOne({where: {OwnerName:ownerName}})
    }
    async updateVehicleOwner(ownerName){
        return await VehicleOwner.update({where: {OwnerName:ownerName}})
    }
    async deleteVehicleOwner(ownerName){
        return await VehicleOwner.destroy({where: {OwnerName:ownerName}})
    }
}

module.exports= new VehicleOwnerServices()


