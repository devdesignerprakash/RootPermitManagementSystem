
const { DataSource } = require("typeorm");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables
require("reflect-metadata");

const AppDataSource = new DataSource({
  type: "postgres",  
  host: process.env.DB_HOST || "localhost",  // Host of the database
  port: process.env.DB_PORT || 5432,         // Default port for PostgreSQL
  username: process.env.DB_USER,             // DB user from .env file
  password: process.env.DB_PASSWORD,         // DB password from .env file
  database: process.env.DB_NAME,             // DB name from .env file
  synchronize: true, 
  dropSchema:true,                        // Set this to false in production
  logging: false,                            // Disable query logging
  entities: [__dirname + "/../entities/*.js"],   // Path to your entities
  migrations: [__dirname + "/../migrations/*.js"], // Path to your migrations
  subscribers: [__dirname + "/../subscribers/*.js"], // Path to your subscribers
});

module.exports = AppDataSource;

