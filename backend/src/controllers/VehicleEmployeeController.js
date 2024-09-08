
const VehicleEmployee = require("../models/VehicleEmployee");
const VehicleEmployeeServices = require('../services/VehicleEmployeeService')

class VehicleEmployeeControllers {
  async createVehicleEmployee(req, res) {
    try {
      const vehicleEmployee = req.body||req.body.Driver||req.body.Other||req.body.Helper;
      if(req.existingVehicleEmployee){
        return res.status(409).send({ message: "Vehicle Employee already exists" });
      }
      const newVehicleEmployee = await VehicleEmployeeServices.createVehicleEmployee(vehicleEmployee);
      res.status(201).json(newVehicleEmployee)
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllVehicleEmployee(req, res) {
    try {
      const allVehicleEmployees = await VehicleEmployeeServices.getAllVehicleEmployee();
      if (allVehicleEmployees.length===0) { 
        res.status(404).json({
          msg: "No Data Found",
        });
        
      } else {
        res.json(allVehicleEmployees)
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async getVehicleEmployee(req, res) {
    try {
      console.log(req.params)
      const vehicleEmployee = await VehicleEmployee.findOne({
        where: { EmployeeLicenceNumber: req.params.EmployeeLicenceNumber }
      });
      if (vehicleEmployee) {
        const foundVehicleEmployee= await VehicleEmployeeServices.getVehicleEmployee(req.params.EmployeeLicenceNumber);
        res.json(foundVehicleEmployee)
        
      } else {
        res.status(409).json({
          msg: "Employee not Exist",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateVehicleEmployee(req, res) {
    try {
      const vehicleEmployee= await VehicleEmployee.findOne({ where: {EmployeeLicenceNumber: req.params.EmployeeLicenceNumber}});
      if (vehicleEmployee ){
        await VehicleEmployeeServices.updateVehicleEmployee(req.body,req.params.EmployeeLicenceNumber);
        res.status(201).json({
          msg: "Employee Updated Successfully",
        });
      } else {
        res.status(409).json({
          msg: "No Employee  Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteVehicleEmployee(req, res) {
    try {
      const vehicleEmployee = await VehicleEmployee.findOne({
        where: { EmployeeLicenceNumber: req.params.EmployeeLicenceNumber },
      });
      if (vehicleEmployee) {
        await VehicleEmployeeServices.deleteVehicleEmployee(req.params.EmployeeLicenceNumber);
        res.status(201).json({
          msg: "Employee Deleted Successfully",
        });
      } else {
        res.status(409).json({
          msg: "Employee Not Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new VehicleEmployeeControllers();
