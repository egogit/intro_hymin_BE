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
                req.session.userid = result[0].uid;
                await redisClient.set(result[0].uid, "1");
                res.send({"status": 'success'});
            }else{
                await redisClient.set(result[0].uid, "0");
                res.send({"status": 'login failure'})
            }
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
    const sessionExists = await redisClient.get("admin");
    if(parseInt(sessionExists)){
        res.send({status: "success"})
    }else{
        res.send({status: "no session"});
    }
}

const logout = async(req, res) => {
    const sessionExists = await redisClient.get("admin");
    if(parseInt(sessionExists)){
        redisClient.del("admin");
        res.send({status: "success"})
    }else{
        res.status(400).send({status: "logout: no session"});
    }
}

module.exports = {
    login,
    checkSession,
    logout
};