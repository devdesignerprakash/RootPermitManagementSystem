const OfficeEmployee = require("../models/OfficeEmployee");
const UserDetails = require("../models/UserDetails");
const Vehicle = require("../models/Vehicle");
const YatayatSewa = require("../models/YatayatSewa");
const VehicleType = require("../models/VehicleType");
const VehicleEmployee = require("../models/VehicleEmployee");

class Middlewares {
  async checkVehicleExistorNot(req, res, next) {
    try {
      const vehicle = await Vehicle.findOne({ where: { Number: req.body.Number } });
      if (vehicle) {
        return res.status(409).json({ msg: "Vehicle Number already exists" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  async userExistOrNot(req, res, next) {
    try {
      const user = await UserDetails.findOne({ where: { Email: req.body.Email } });
      if (user) {
        return res.status(409).json({ msg: "User already exists" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

async checkYatayatSewaExistence(req, res, next){
    try {
      const yatayatSewaName = req.body.YatayatSewaName || req.body.YatayatSewa?.YatayatSewaName;
      if (!yatayatSewaName) {
        return next();
      }
  
      const yatayatSewa = await YatayatSewa.findOne({ where: { YatayatSewaName: yatayatSewaName } });
      if (yatayatSewa) {
        req.existingYatayatSewa = yatayatSewa;
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
};
  async checkOfficeEmployeeExistorNot(req, res, next) {
    try {
      const officeEmployee = await OfficeEmployee.findOne({ where: { SanketNumber: req.body.SanketNumber } });
      if (officeEmployee) {
        return res.status(409).json({ msg: "Office Employee already exists" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  async checkVehicleTypeExistorNot(req, res, next) {
    try {
      const type = await VehicleType.findOne({ where: { Name: req.body.Name } });
      if (type) {
        return res.status(409).json({ msg: "Vehicle Type already registered" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  async checkVehicleEmployeeExistorNot(req, res, next) {
    try {
      const employee = await VehicleEmployee.findOne({ where: { EmployeeLicenceNumber: req.body.Driver.EmployeeLicenceNumber } });
      if (employee) {
        return res.status(409).json({ msg: "Employee is already registered" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}

module.exports = new Middlewares();
