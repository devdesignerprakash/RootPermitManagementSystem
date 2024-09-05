const UserDetails = require("../models/UserDetails")
const Vehicle = require("../models/Vehicle")

class Middlwares{
    async checkVehicleExistorNot(req,res,next){
        try{
            const vehicle =  Vehicle.findOne({where:{Number:req.Number}})
       if(vehicle){
            res.status(201).json({msg:"Vehicle Number already Exist"})
       }
         req.Number=vehicle
         next()
        }catch(error){
            throw new Error(error)

        }
    }
    async userExistOrNot(req,res,next){
        try{
            const user= UserDetails.findOne({where:{Email:req.Email}})
            if(user){
                res.status(201).
            }


        }catch(error){
            throw new Error(error)
        }

    }
}


module.exports= new Middlewares()