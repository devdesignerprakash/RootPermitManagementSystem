const OfficeEmployee = require('../models/OfficeEmployee')
const OfficeEmployeeServices = require('../services/OfficeEmployeeServices')

class OfficeEmployeeControllers{
    async createOfficeEmployee(req,res){
        try{
            const sanketNumber= OfficeEmployee.findOne({SanketNumber:req.params.SanketNumber})
            if(!sanketNumber){
                const newOfficeEmployee= await OfficeEmployeeServices.createOfficeEmployee(req.body)
                res.status(201).json(newOfficeEmployee)

            }else{
                res.status(409).json({
                    msg:"Office Employee Already Exist"
                })
            }
        }catch(error){
            throw new Error(error)
        }
    }
    async getAllOfficeEmployee(req,res){
        try{
            const allEmployee= OfficeEmployeeServices.getAllOfficeEmployee()
        if(allEmployee.length!==0){
            res.json(allEmployee)
        }else{
            res.status(409).json({
                msg:"No Data Found"
            })
        }
        }catch(error){
            throw new Error(error)
        }
    }
    async getOfficeEmployee(req,res){
        try{
            const officeEmployee= await OfficeEmployeeServices.getAllOfficeEmployee(req.params.id)
            if(officeEmployee){
                res.status(201).json(officeEmployee)
            }
            else{
                res.status(400).json({
                    msg:"Employee Not Found"
                })
            }
        }catch(error){
            throw new Error(error)
        }
    }
    async updateOfficeEmployee(req,res){
        try{
            const officeEmployee= OfficeEmployee.find({_id:req.params.id})
            if(officeEmployee){
                const updatedEmployee= await OfficeEmployeeServices.UpdateOfficeEmployee(req.params.id,req.body)
                res.status(201).json({
                    msg:"Employee Updated Successfully",
                    updatedEmployee
                })
            }else{
                res.status(400).json({
                    msg:"Employee Not found"
                })
            }
        }
        catch(error){
            throw new Error(error)
        }
    }
    async deleteOfficeEmployee(req,res){
        try{
            const officeEmployee = OfficeEmployee.find({_id:req.params.id})
            if(officeEmployee){
                const deletedEmployee= await OfficeEmployeeServices.deleteOfficeEmployee(req.params.id)
                res.status(201).json({
                    msg:"Employee deleted Successfully",
                })
            }else{
                res.status(400).json({
                    msg:"Employee Not found"
                })
            }
        }catch(error){
            throw Error(error)

        }
    }

}
module.exports = new OfficeEmployeeControllers()