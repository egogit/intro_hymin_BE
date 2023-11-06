const express = require('express');
const app = express();
const cors = require('cors');
const [pool,settingInitDB] = require('./db/connect/maria');

app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.get('/api/init', (req, res) => {
    settingInitDB().then(() => {
            console.log('Successfully init');
            res.status(200).send();
        }
    ).catch((err) => {
            console.log(err)
            res.status(404).send();
        }
    )
})

// app.get('/test', async (req, res) => {
//     let conn;
//     try{
//         conn = await pool.getConnection();
//         console.log('Connected to the database.');
//     }catch(err){
//         console.error('Error connecting too the database.');
//     }finally{
//         if(conn){
//             conn.release();
//         }
//     }
//     res.status(200).send();
// })

app.get('/api/getUserInfo', async (req, res)=>{
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        result = await conn.query('SELECT * FROM user');
        res.send(result);
    } catch(err){
        console.log(err)
        res.status(404).send();
    }
    await conn.release();
})

app.get('/api/getSkill',(req, res)=>{

})

app.get('/api/getInterests',(req, res)=>{

})

app.get('/api/getExperience',(req, res)=>{

})

app.get('/api/getEducation',(req, res)=>{

})

app.get('/api/getCertificate',(req, res)=>{

})

app.get('/api/getProject',(req, res)=>{

})

app.get('/api/getExtracurriculum',(req, res)=>{

})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})