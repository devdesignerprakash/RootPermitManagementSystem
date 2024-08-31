const UserDetailService=require('../services/UserDetalServices')

class UserDetailsControllers{
     async createUser(req,res){
        try {
            const user= await UserDetailService.createUser(req.body)
            user.save()
            res.json({
                msg:"user created successfully"
            })
        }catch(error){
            throw new Error(error)
        }
    }
    async getUser(req, res) {
        try{
            const user = await UserDetailService.getUserById(req.params.id);
        res.json(user);
        }catch(error){
            throw new Error(error)
        }
      }
      async getAllUsers(req, res) {
        try{
            const users = await UserDetailService.getAllUsers();
        res.json(users);
        }
        catch(error){
            throw new Error(error)
        }
      }
      async updateUser(req, res) {
        try{
            const user = await UserDetailService.updateUser(req.params.id, req.body);
            res.json(user)  
        }
        catch(error){
            throw new Error(error)
        }
    }
    async deleteUser(req, res) {
        try{
            await UserDetailService.deleteUser(req.params.id);
            res.status(204).send();
        }
       catch(error){
        throw new Error(error)
       }
    }  

}
module.exports= new UserDetailsControllers()