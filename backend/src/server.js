//importing section
const dotenv= require('dotenv') //importing dotenv
const express = require('express') //importing express
const dbconnection =require('./config/db') //importing database
const cors= require('cors') //importing cors
const routePermitVehiclesRoutes=require('./routes/routePermitVehiclesRoutes')

const userRoutes=require('./routes/UserDetailsRoutes')
const officeEmployeeRoutes=require('./routes/OfficeEmployeeRoutes')
const vehicleTypeRoutes= require('./routes/VehicleTypeRoutes')
const yatayatSewaRoutes = require('./routes/YatayatSewaRoutes')
const vehicleEmployeeRoutes= require('./routes/VehicleEmployeeRoutes')
async function testDbConnection() {
    try {
        await dbconnection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }  
}
// Call the function to test the connection
testDbConnection();

//using section
const app=express() //using express
app.use(cors())
app.use(express.json()) //using express for json data
app.use('/',routePermitVehiclesRoutes)
app.use('/',userRoutes)
app.use('/',officeEmployeeRoutes)
app.use('/',vehicleTypeRoutes)
app.use('/',yatayatSewaRoutes)
app.use('/',vehicleEmployeeRoutes)
dotenv.config({path:'./.env'})
console.log(process.env.PORT)





app.listen(process.env.PORT,()=>{
    console.log(`app is listening in port ${process.env.PORT || 5000}`)
})
