const User = require('../models/User')
const UserServices= require('../services/UserServices')

class UserControllers{
    async createUser(req,res)
    {
        try{
            const user= User.findOne({Email:req.body.Email})
            if(!user){
                const newUser = await UserServices.createUser(req.body)
                res.status(201).json(newUser)
            }
            else{
                res.status(409).json({
                    msg:"User Already Exist"
                })
        }
    }catch(error){
            throw new Error(error)
        }
    }
        
}

module.exports= new UserControllers()