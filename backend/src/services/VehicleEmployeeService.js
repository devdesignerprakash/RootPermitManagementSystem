const VehicleEmployee= require('../models/VehicleEmployee')

class VehicleEmployeeServices {
    async createVehicleEmployee(vehicleEmployeeData){
        return await VehicleEmployee.create(vehicleEmployeeData)

    }
    async getAllVehicleEmployee(){
        return await VehicleEmployee.findAll()
    }
    async getVehicleEmployee(EmployeeLicenceNumber){
        return await VehicleEmployee.findOne({where:{EmployeeLicenceNumber:EmployeeLicenceNumber}})
    }
    async updateVehicleEmployee(vehicleEmployeeData,id){
        return await YatayatSewa.update(vehicleEmployeeData,{where:{Id:id}})
    }
    async deleteVehicleEmployee(id){
        return await YatayatSewa.destroy({where:{Id:id}})
    }
}

module.exports= new VehicleEmployeeServices()