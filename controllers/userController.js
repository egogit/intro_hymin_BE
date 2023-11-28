const [pool, _] = require('../db/connect/maria');
const {formatTerm, formatDate} = require('../utils/dateUtils')

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

const updateUserInfo = async(req, res) => {
    let conn;
    const id = req.body.id;
    const intro = req.body.intro;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE user set intro=(?) WHERE id=(?)', [intro, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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

const updateSkill = async(req, res) => {
    let conn;
    const id = req.body.id;
    const name = req.body.name;
    const degree = req.body.degree;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE skill set name=(?), degree=(?) WHERE id=(?)', [name, degree, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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

const updateInterests = async(req, res) => {
    let conn;
    const id = req.body.id;
    const name = req.body.name;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE interests set name=(?) WHERE id=(?)', [name, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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
            'SELECT A.id id, A.type type, A.name name, A.location location, A.startDate startDate, A.endDate endDate, B.content content, B.id expContentId' +
            ' FROM experience A JOIN expContent B ON A.id = B.expId');
        result.map((exp) => {
            exp['term'] = formatTerm(exp['startDate'],exp['endDate'])
        })
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

const updateExperience = async(req, res) => {
    let conn;
    const id = req.body.id;
    const type = req.body.type;
    const name = req.body.name;
    const location = req.body.location;
    const content = req.body.content;
    const expContentId = req.body.expContentId;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            `UPDATE experience set type=(?), name=(?), location=(?) WHERE id=(?)`, [type, name, location, id]);
        const result1 = await conn.query(
            'UPDATE expContent set content=(?) WHERE expId=(?)',[content, expContentId]
        )
        let msg = result && result1 ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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
        result.map((education) => {
            education['term'] = formatTerm(education['startDate'],education['endDate'])
        })
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


const updateEducation = async(req, res) => {
    let conn;
    const id = req.body.id;
    const major = req.body.major;
    const minor = req.body.type;
    const degree = req.body.degree;
    const school = req.body.school;
    const GPA = req.body.GPA;
    const relatedSubject = req.body.relatedSubject;

    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE education set major=(?), minor=(?), degree=(?), school=(?), GPA=(?), relatedSubject=(?) WHERE id=(?)'
            , [major, minor, degree, school, GPA, relatedSubject, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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
        result.map((education) => {
            education['date'] = formatDate(education['acqDate'])
        })
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

const updateCertificate = async(req, res) => {
    let conn;
    const id = req.body.id;
    const name = req.body.name;
    const organization = req.body.organization;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE certificate set name=(?), organization=(?) WHERE id=(?)', [name, organization, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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
        result.map((project) => {
            project['term'] = formatTerm(project['startDate'],project['endDate'])
        })
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

const updateProject = async(req, res) => {
    let conn;
    const id = req.body.id;
    const name = req.body.name;
    const stack = req.body.stack;
    const content = req.body.content;
    const contribution = req.body.contribution;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE project set name=(?), stack=(?), content=(?) contribution=(?) WHERE id=(?)'
            , [name, stack, content, contribution, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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
        result.map((extra) => {
            extra['term'] = formatTerm(extra['startDate'],extra['endDate'])
        })
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

const updateExtracurriculum = async(req, res) => {
    let conn;
    const id = req.body.id;
    const name = req.body.name;
    const content = req.body.content;
    try{
        conn = await pool.getConnection();
        const result = await conn.query(
            'UPDATE project set name=(?), content=(?) WHERE id=(?)'
            , [name, content, id]);
        let msg = result ? {status: "success"} : {status: "fail"};
        await conn.release();
        return res.send(msg);
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
    updateUserInfo,
    getSkill,
    updateSkill,
    getInterests,
    updateInterests,
    getExperience,
    updateExperience,
    getEducation,
    updateEducation,
    getCertificate,
    updateCertificate,
    getProject,
    updateProject,
    getExtracurriculum,
    updateExtracurriculum,
};