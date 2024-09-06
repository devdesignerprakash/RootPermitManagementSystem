const express= require('express')
const YatayatSewaControllers = require('../controllers/YatayatSewaController') 
const Middlware = require('../middlewares/Middlware')
const router=express.Router()
// -----Routes-----
router.get('/yatayat-sewa',YatayatSewaControllers.getAllYatayatSewa)
router.get('/yatayat-sewa/:id',YatayatSewaControllers.getYatayatSewa)
router.post('/yatayat-sewa',Middlware.checkYatayatSewaExistorNot,YatayatSewaControllers.createYatayatSewa)
router.post('/yatayat-sewa/:id',YatayatSewaControllers.updateYatayatSewa)
router.delete('/yatayat-sewa/:id',YatayatSewaControllers.deleteYatayatSewa)

module.exports=router;