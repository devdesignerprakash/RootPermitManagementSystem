//importing section
const dotenv= require('dotenv') //importing dotenv
dotenv.config({path:'./.env'})
const express = require('express') //importing express
const AppDataSource =require('./config/db') //importing database
const cors= require('cors') //importing cors;



//using section
const app=express() //using express
app.use(cors())
app.use(express.json())
AppDataSource.initialize().then(()=>{
    console.log("Database is connected Successfully")
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
}).catch((error) => {
    console.error("Error during DataSource initialization:", error);
  });
 //using express for json data



