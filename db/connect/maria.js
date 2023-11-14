const maria = require('mariadb');
require('dotenv').config();

const options = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const pool = maria.createPool(options);

module.exports = [pool, options];