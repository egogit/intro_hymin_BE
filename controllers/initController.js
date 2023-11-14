const [pool, _] = require('../db/connect/maria');
const [createInitTable, insertInitData] = require('../db/query/initDBQuery');

async function setInitDB(){
    const conn = await pool.getConnection();
    for(let table of Object.keys(createInitTable)){
        await conn.query(createInitTable[table])
        await conn.query(insertInitData[table])
    }
    await conn.release();
}

const initDB = async(req, res) => {
    setInitDB().then(()=>{
        res.status(200).send();
    }).catch((err) =>{
        console.log(err);
        res.status(500).send();
    })
}

module.exports = initDB;