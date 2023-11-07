const pool = require('../db/connect/maria');

const getUserInfo = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT email, phone, blog, git, intro FROM user');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);

        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}

const getSkill = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT * FROM skill');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);

        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}

const getInterests = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT * FROM interests');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);
        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}

const getExperience = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT A.id id, A.type type, A.name name, A.location location, A.startDate startDate, A.endDate endDate, B.content content' +
            ' FROM experience A JOIN expContent B ON A.id = B.expId');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);
        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}

const getEducation = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT * FROM education');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);
        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}


const getCertificate = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT * FROM certificate');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);
        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}

const getProject = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT * FROM project');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);
        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}

const getExtracurriculum = async(req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'SELECT * FROM extracurriculum');
        await conn.release();
        return res.send(result);
    }catch(err){
        console.error(err);
        if(conn){
            await conn.release();
        }
        return res.status(500).send(err);
    }
}


module.exports = {
    getUserInfo,
    getSkill,
    getInterests,
    getExperience,
    getEducation,
    getCertificate,
    getProject,
    getExtracurriculum
};