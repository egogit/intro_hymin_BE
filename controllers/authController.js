const [pool, _] = require('../db/connect/maria');
const redis = require("redis");
const redisClient = redis.createClient( {
    url: "redis://localhost:6379"});
redisClient.connect().catch(console.error);

const login = async(req, res) => {
    let conn;
    const id = req.body.id;
    const pw = req.body.pw;
    if(!id){
        const err = JSON.stringify({'status': 'err', 'msg': '아이디를 입력해주세요.'});
        res.send(err);
    }else if(!pw){
        const err = JSON.stringify({'status': 'err', 'msg': '패스워드를 입력해주세요.'});
        res.send(err);
    }else{
        try{
            conn = await pool.getConnection();
            const result = await conn.query(
                'SELECT * FROM user WHERE uid=(?) and pw=(?)',[id, pw]);

            const loginSuccess = result.length > 0;
            let msg = '';

            if(loginSuccess){
                await redisClient.set('admin', 1);
                res.send({msg: 'success'})
            }else{
                res.send({msg: 'fail'})
            }
            await conn.release();
        }catch(err){
            console.error(err);

            if(conn){
                await conn.release();
            }
            return res.status(500).send(err);
        }
    }
}

const checkSession = async (req, res) => {
    if(parseInt(await redisClient.get("admin"))){
        res.send({status: "success"})
    }else{
        res.send({status: "fail"});
    }
}

const logout = async(req, res) => {
    let msg = ""
    if(await redisClient.get("admin")){
        await redisClient.set("admin",0)
        msg = {status: "success"}
    }else{
        msg = {status: "fail"}
    }
    return res.send(msg);
}

module.exports = {
    login,
    checkSession,
    logout
};