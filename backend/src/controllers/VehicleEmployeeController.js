
const VehicleEmployee = require("../models/VehicleEmployee");
const VehicleEmployeeServices = require('../services/VehicleEmployeeService')

class VehicleEmployeeControllers {
  async createYatayatSewa(req, res) {
    try {
      const vehicleEmployee = await VehicleEmployee.findOne({
        where: {EmployeeLicenceNumber: req.body.EmployeeLicenceNumber},
      });
      if (!vehicleEmployee) {
        await VehicleEmployeeServices.createVehicleEmployee(req.body)
        res.status(201).json({
          msg: "Employee created Successfully",
        });
      } else {
        res.status(409).json({
          msg: "Employee Already Exist",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllVehicleEmployee(req, res) {
    try {
      const AllVehicleEmployee = await VehicleType.findAll();
      if (AllVehicleEmployee) {
        const AllVehicleEmployee = await VehicleEmployeeServices.getAllVehicleEmployee()
        res.json(AllVehicleEmployee)
      } else {
        res.status(404).json({
          msg: "No Data Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async getVehicleEmployee(req, res) {
    try {
      const vehicleEmployee = await VehicleEmployee.findOne({
        where: { EmployeeLicenceNumber: req.params.EmployeeLicenceNumber }
      });
      if (vehicleEmployee) {
        const foundVehicleEmployee= await VehicleEmployeeServices.getVehicleEmployee(req.params.id);
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
        await VehicleEmployeeServices.updateVehicleEmployee(req.body,req.params.id);
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
      const vehicleEmployee = await YatayatSewa.findOne({
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
