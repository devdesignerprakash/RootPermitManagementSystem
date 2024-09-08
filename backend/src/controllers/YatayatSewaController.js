const YatayatSewa = require("../models/YatayatSewa");
const YatayatSewaServices = require("../services/YatayatSewaService");

class YatayatSewaControllers {
  async createYatayatSewa(req, res) {
    try {
      const yatayatSewaData = req.body.YatayatSewa || req.body;
      
      if (req.existingYatayatSewa) {
        return res.status(409).json({ msg: "Yatayat Sewa already exists" });
      }

      const newYatayatSewa = await YatayatSewa.create(yatayatSewaData);
      res.status(201).json({ msg: "Yatayat Sewa created successfully", data: newYatayatSewa });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
  async getAllYatayatSewa(req, res) {
    try {
      const AllYatayatSewa = await YatayatSewa.findAll();
      if (AllYatayatSewa) {
        const AllYatayat = await YatayatSewaServices.getAllYatayatSewa();
        res.json(AllYatayat);
      } else {
        res.status(404).json({
          msg: "No Data Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async getYatayatSewa(req, res) {
    try {
      const yatayatSewa = await YatayatSewa.findOne({
        where: { Id: req.params.id },
      });
      if (yatayatSewa) {
        const foundYatayatSewa = await YatayatSewaServices.getYatayatSewa(
          req.params.id
        );
        res.json(foundYatayatSewa);
      } else {
        res.status(409).json({
          msg: "Yatayat Sewa not Exist",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateYatayatSewa(req, res) {
    try {
      const yatayatSewa = await YatayatSewa.findOne({
        where: { Id: req.params.id },
      });
      if (yatayatSewa) {
        await YatayatSewaServices.updateYatayatSewa(req.body, req.params.id);
        res.status(201).json({
          msg: "Yatayat Sewa Updated Successfully",
        });                    
      } else {
        res.status(409).json({
          msg: "No Yatyat Sewa Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteYatayatSewa(req, res) {
    try {
      const yatayatSewa = await YatayatSewa.findOne({
        where: { Id: req.params.id },
      });
      if (yatayatSewa) {
        await YatayatSewaServices.deleteYatayatSewa(req.params.id);
        res.status(201).json({
          msg: "Yatayat Sewa Deleted Successfully",
        });
      } else {
        res.status(409).json({
          msg: "No Yatyat Sewa Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new YatayatSewaControllers();
