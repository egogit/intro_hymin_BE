const maria = require('mariadb');
const initQuery = require('../query/initDBQuery');
require('dotenv').config();

const pool = maria.createPool({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

async function doesTableExist(tableName){
    const conn = await pool.getConnection();
    const result = await conn.query(`SHOW TABLES LIKE ${tableName}`);
    return result.length > 0;
}

async function setInitTable(){
    for(let table of initQuery){
        if(!(await doesTableExist(table))){
            const conn = await pool.getConnection();
            await conn.query(initQuery[table])
        }
    }
}

module.exports = [pool, setInitTable];