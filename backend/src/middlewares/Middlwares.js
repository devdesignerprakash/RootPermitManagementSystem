const OfficeEmployee = require("../models/OfficeEmployee");
const UserDetails = require("../models/UserDetails");
const Vehicle = require("../models/Vehicle");
const YatayatSewa = require("../models/YatayatSewa");
const VehicleType = require("../models/VehicleType");
const VehicleEmployee = require("../models/VehicleEmployee");

class Middlewares {
  async checkVehicleExistence(req, res, next) {
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
      const yatayatSewaName = req.body.YatayatSewaName||req.body.YatayatSewa?.YatayatSewaName;
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

  async checkVehicleTypeExistence(req, res, next) {
    try {
      console.log(req.body.Name)
      const vehicleTypeName = req.body.Name||req.body.VehicleType?.Name;
      if(!vehicleTypeName){
        return next();
      }
      const vehicleType = await VehicleType.findOne({ where:{Name:vehicleTypeName } });
      if (vehicleType) {
        req.existingVehicleType = vehicleType;
      }
      next();
    } catch (error) {
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  async checkVehicleEmployeeExistence(req, res, next) {
    try {
      const Driver = req.body.EmployeeLicenceNumber || req.body.Driver?.EmployeeLicenceNumber;
      const Helper=req.body.EmployeeLicenceNumber || req.body.Helper?.EmployeeLicenceNumber;
      const Other= req.body.EmployeeLicenceNumber || req.body.Other?.EmployeeLicenceNumber;
      if (!Driver && !Helper && !Other) {
        return next();
      }
      if (Driver) {
        const vehicleEmployee = await VehicleEmployee.findOne({ where: { EmployeeLicenceNumber: Driver } });
        if (vehicleEmployee) {
          req.existingVehicleEmployeeDriver = vehicleEmployee;
      }
      if (Helper) {
        const helperEmployee = await VehicleEmployee.findOne({ where: { EmployeeLicenceNumber: Helper } });
        if (helperEmployee) {
          req.existingVehicleEmployeeHelper = helperEmployee;
        }
        if (Other) {
          const otherEmployee = await VehicleEmployee.findOne({ where: { EmployeeLicenceNumber: Other } });
          if (otherEmployee) {
            req.existingVehicleEmployeeOther = otherEmployee;}
          }}
      }
      next()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}

module.exports = new Middlewares();
