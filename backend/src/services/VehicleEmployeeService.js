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
        return await VehicleEmployee.update(vehicleEmployeeData,{where:{EmployeeLicenceNumber:EmployeeLicenceNumber}})
    }
    async deleteVehicleEmployee(id){
        return await VehicleEmployee.destroy({where:{EmployeeLicenceNumber:EmployeeLicenceNumber}})
    }
}

module.exports= new VehicleEmployeeServices()