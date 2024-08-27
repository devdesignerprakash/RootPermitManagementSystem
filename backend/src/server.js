//importing section
const dotenv= require('dotenv') //importing dotenv
const express = require('express') //importing express
const dbconnection =require('./config/db') //importing database

async function testDbConnection() {
    try {
        const result = await dbconnection.query('SELECT NOW()');
        console.log('Database connected successfully at:', result.rows[0].now);
    } catch (err) {
        console.error('Database connection error', err);
        process.exit(1); // Exit the process with an error code
    }
}

// Call the function to test the connection
testDbConnection();

//using section
const app=express() //using express
app.use(express.json()) //using express for json data
dotenv.config({path:'./.env'})
console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log(`app is listening in port ${process.env.PORT || 5000}`)
})
