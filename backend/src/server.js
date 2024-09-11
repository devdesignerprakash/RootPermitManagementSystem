//importing section
const dotenv= require('dotenv') //importing dotenv
dotenv.config({path:'./.env'})
const express = require('express') //importing express
const cors= require('cors') //importing cors;
const dbConnection = require('./config/db')
const userRoutes= require('./routes/UserRoutes')


//using section
const app=express() //using express
app.use(cors())
app.use(express.json())
app.use('/',userRoutes)
dbConnection().then(()=>{
  console.log("Database is connected Succesfully")
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((error)=>console.log(error))



 
