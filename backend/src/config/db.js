const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const dbConnection = async (app) => {
  try {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);
}catch(error){
  throw new Error(error)
};
}
module.exports = dbConnection;

