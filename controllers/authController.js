const [pool, _] = require('../db/connect/maria');

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
                msg = JSON.stringify({'status': 'success', 'msg': '로그인 되었습니다.'});
                req.session.id = id;
                res.setHeader('Set-Cookie',req.session.id);
            }else{
                msg = JSON.stringify({'status': 'err', 'msg': '다시 로그인해주세요.'});
            }
            await conn.release();
            res.send(msg);
        }catch(err){
            console.error(err);

            if(conn){
                await conn.release();
            }
            return res.status(500).send(err);
        }
    }
}

const checkSession = async(req, res) => {
    let msg = "";
    if(req.session.id){
        msg = JSON.stringify({'status': 'success'});
    }
    else{
        msg = JSON.stringify({'status': 'fail'});
    }
    return res.send(msg);
}

const logout = async(req, res) => {
    let msg = ""
    if(req.session.id){
        req.session.destroy(() =>{});
        msg = JSON.stringify({'status': 'success'});
    }else{
        msg = JSON.stringify({'status': 'fail'});
    }
    return res.send(msg);
}

module.exports = {
    login,
    checkSession,
    logout
};