const User = require("../models/User");
const dotenv= require('dotenv') //importing dotenv
dotenv.config({path:'./.env'})
const UserServices = require("../services/UserServices");
const bcrypt= require('bcrypt')

class UserControllers {
  async createUser(req,res) {
    console.log(req.body)
    try {
      const userExist = await User.findOne({Email:req.body.Email});
      if (!userExist) {
        const {Password}= req.body
        if(Password){
            const saltRounds = parseInt(process.env.SALT_ROUNDS || 10);
            const hashedPassword= await bcrypt.hash(Password, saltRounds)
            req.body.Password=hashedPassword;
        }
        const newUser = await UserServices.createUser(req.body);
        res.status(201).json(newUser);
      } else {
        res.status(409).json({
          msg: "User Already Exist",
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async getUsers(req, res) {
    const allUsers = await UserServices.getAllUsers();
    if (allUsers.length !== 0) {
      res.json(allUsers);
    } else {
      res.status(400).json({
        msg: "No Data found",
      });
    }
  }
  async getUser(req, res) {
    const user = await UserServices.getUser(req.params._id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({
        msg: "No User Found",
      });
    }
  }
  async updateUser(req, res) {
    console.log(req.params)
    const user = await User.find({_id: req.params.id });
    if (user) {
      const updatedUser = UserServices.updateUser(req.params.id, req.body);
      res.status(201).json({
        msg: "User Updated Successfully",
        updatedUser
      });
    } else {
      res.status(400).json({
        msg: "User Not Exist",
      });
    }
  }
  async delteUser(req, res) {
    const user= await User.find({Email:req.params.id})
    if(user){
        const deletedUser= await UserServices.deleteUser(req.params.id)
        res.status(200).json({
            msg:"User Deleted Successfully",
            deletedUser
        })
    }
    else{
        res.status(400).json({
            msg:"User Not Exist"
        })
    }
  }
}

module.exports = new UserControllers();
