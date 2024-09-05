const Vehicle = require('../models/Vehicle')

class VehicleServices{
    async createVehicle(vehicleData){
            await Vehicle.create(vehicleData)
    }
    async getAllVehicles(){
        await Vehicle.findAll()

    }
    async getVehicle(vehicleNumber){
        await Vehicle.findOne({where:{Number:vehicleNumber}})
    } 
    async updateVehicle(vehicleNumber){
        await Vehicle.update({where:{Number:vehicleNumber}})
    }   
    async deleteVehicle(vehicleNumber){
        await Vehicle.destroy({where:{Number:vehicleNumber}})
    }
}

module.exports = new VehicleServices()