const VehicleOwner = require("../models/VehicleOwner");
const VehicleOwnerServices = require("../services/VehicleOwnerService");
class VehicleOwnerControllers {
  async createVehicleOwner(req, res) {
    try {
     const Owner=req.body.VehicleOwner||req.body
      if(req.existingVehicleOwner){
        return res.status(409).send({ message: "Vehicle Owner already exists" })
      }
      const newVehicleOwner=await VehicleOwnerServices.createVehicleOwner(Owner);
      res.status(201).json({
        msg: "Vehicle Owner Created Successfully",
        data:newVehicleOwner
      });
    } 
    catch (error) {
      res.status(500).send({ message: "Error creating Vehicle Owner", error: error.message})
      }
  }
  async getAllVehicleOwner(req, res) {
    try {
      const allOwnerList = await VehicleOwnerServices.getAllVehicleOwner();
      if (allOwnerList.length !== 0) {
        res.status(201).json(allOwnerList);
      } else {
        res.status(409).json({
          msg: "No data Found",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async getVehicleOwner(req, res) {
    try {
      const Owner = await VehicleOwnerServices.getVehicleOwner(
        req.params.ownerName
      );
      if (Owner) {
        res.status(201).json(Owner);
      } else {
        res.status(409).json({
          msg: "No data Found",
        });
      }
    } catch (error) {
        throw new Error(error)
    }
  }
  async updateVehicleOwner(req,res){
    try{
        const Owner = VehicleOwner.findOne({where:{OwnerName:req.params.ownerName}})
        if(Owner){
            await VehicleOwnerServices.updateVehicleOwner(req.params.ownerName,req.body)
            res.status(201).json({
                msg:"Vehicle Owner Updated Successfully"
            })
        }else{
            res.status(409).json({
                msg:"Vehicle Owner Not found"
            })
        }
    }catch(error){
        throw new Error(error)

    }
  }
  async deleteVehicleOwner(req,res){
    try{
      const vehicleOwner= VehicleOwner.findOne({where:{OwnerName:req.params.ownerName}})
      if(vehicleOwner){
        await VehicleOwnerServices.deleteVehicleOwner(req.params.ownerName)
        res.status(201).json({
          msg:"Vehilce Owner Deleted Successfully"
        })
      }
      else{
        res.status(409).json({
          msg:"Vehicle Owner Not Found"
        })
      }
    }
    catch(error){
      throw new Error(error)
    }
  }
}

module.exports = new VehicleOwnerControllers();
