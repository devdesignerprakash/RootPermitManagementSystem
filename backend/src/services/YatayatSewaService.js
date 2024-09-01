const YatayatSewa= require('../models/YatayatSewa')

class YatayatSewaServices{
    async createYatayatSewa(yatayatSewaData){
        return await YatayatSewa.create(yatayatSewaData)

    }
    async getAllYatayatSewa(){
        return await YatayatSewa.findAll()
    }
    async getYatayatSewa(id){
        return await YatayatSewa.findOne({where:{Id:id}})
    }
    async updateYatayatSewa(yataSewaData,id){
        return await YatayatSewa.update(yataSewaData,{where:{Id:id}})
    }
    async deleteYatayatSewa(id){
        return await YatayatSewa.destroy({where:{Id:id}})
    }
}

module.exports= new YatayatSewaServices()