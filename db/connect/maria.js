const maria = require('mariadb');
require('dotenv').config();

const options = {
    host: process.env.DB_HOST || "mydb", // host: "localhost"
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "info"
}

const pool = maria.createPool(options);

module.exports = [pool, options];