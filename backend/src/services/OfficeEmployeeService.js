const e = require('express')
const OfficeEmployee = require('../models/OfficeEmployee')

class OfficeEmployeeServices{
    async createOfficeEmployee(employeeData){
        return await OfficeEmployee.create(employeeData)
    }
    async getEmployee(id){
        return await OfficeEmployee.findByPk(id)
    }
    async getAllEmployee(){
        return await OfficeEmployee.findAll()
    }
    async updateEmployee(id,employeeData){
        return await OfficeEmployee.update(employeeData, {where:{Id:id}})
    }
    async deleteEmployee(id){
        return await OfficeEmployee.destroy({where:{Id:id}})
    }
    }

    module.exports = new OfficeEmployeeServices()

