const UserDetails= require ('../models/UserDetails')
class UserDetailService{
    async createUser(userData) {
        return await UserDetails.create(userData);
      }
      async getUserById(id) {
        return await UserDetails.findByPk(id);
      }
      async getAllUsers() {
        return await UserDetails.findAll();
      }
      async updateUser(id, userData) {
        return await UserDetails.update(userData, { where: { Id: id } });
      }
      async deleteUser(id) {
        return await UserDetails.destroy({ where: { Id: id } });
      }
}
module.exports= new UserDetailService()