const OfficeEmployee = require('../models/OfficeEmployee')

class OfficeEmployeeServices{
    async createOfficeEmployee(employeeData){
        const newEmployee = new OfficeEmployee.create(employeeData)
        return await newEmployee.save()
    }
    async getAllOfficeEmployee(){
        return await OfficeEmployee.find()
    }
    async getOfficeEmployee(id){
        return await OfficeEmployee.findById(id)
    }
    async UpdateOfficeEmployee(id,updatedData){
        return await OfficeEmployee.findByIdAndUpdate(id,updatedData,{new:true})
    }
    async deleteOfficeEmployee(id){
        return await OfficeEmployee.findByIdAndDelete(id)
    }
}

module.exports= new OfficeEmployeeServices()