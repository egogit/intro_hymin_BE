const maria = require('mariadb');
const [createInitTable, insertInitData] = require('../query/initDBQuery');
require('dotenv').config();

const pool = maria.createPool({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

async function setInitTable(){
    const conn = await pool.getConnection();
    for(let table of Object.keys(createInitTable)){
            await conn.query(createInitTable[table])
            await conn.query(insertInitData[table])
    }
    await conn.release();
}

module.exports = [pool, setInitTable];