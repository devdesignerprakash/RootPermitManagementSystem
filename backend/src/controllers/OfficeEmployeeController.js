const OfficeEmployee = require('../models/OfficeEmployee')
const OfficeEmployeeServices = require('../services/OfficeEmployeeService')

class officeEmployeeControllers{
    async createEmployee(req,res){
        try {
            const employee= await OfficeEmployeeServices.createOfficeEmployee(req.body)
        employee.save()
        res.status(201).json({
            msg:"employee created successfully"
        })}
        catch(error){
            throw new Error(error)
        }
    }
 async getEmployee(req,res){
    try{
        const employee= await OfficeEmployeeServices.getEmployee(req.params.id)

    if(employee){
        return employee
    }
    else{
        res.status(404).json({
            msg:"employee not found"
        })
    }
    }catch(error){
        throw new Error(error)
    }
}
async getAllEmployee(req,res){
    try{
        const employees= await OfficeEmployeeServices.getAllEmployee()
    if(employees.length!==0){
        res.status(201).json(employees)
    }
    else{
        res.status(404).json({
            msg:"data not found"
        })
        }
    }catch(error){throw new Error(error)}
    }
    async updateEmployee(req,res){
        console.log(req)
        try{
            const employee= await OfficeEmployee.findOne({where:{Id:req.params.id}})
        if(employee){
             await  OfficeEmployeeServices.updateEmployee(req.params.id, req.body)
            res.status(201).json({
                msg:"updated successfully",
            })
        }
        else{
            res.json(404).json({
                msg:"employee not found"
            })
        }
        }catch(error){
            throw new Error
        }
    }
    async deleteEmployee(req,res){
        try{
            const employee= await OfficeEmployee.findOne(req.params.id)
        if(employee){
            OfficeEmployeeServices.deleteEmployee(id)
            res.status(201).json({
                msg:"employee deleted successfully"
            })
        }
        else{
            res.json(404).json({
                msg:"employee not found"
            })
        }
        }catch(error){
            throw new Error
        }
    }
}

module.exports=new officeEmployeeControllers()
