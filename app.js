const express = require('express');
const app = express();
const cors = require('cors');
const [pool,settingInitDB] = require('./db/connect/maria');

app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, Express')
})

app.get('/test', async (req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        console.log('Connected to the database.');
    }catch(err){
        console.error('Error connecting too the database.');
    }finally{
        if(conn){
            conn.release();
        }
    }
    res.status(200).send();
})

app.get('/getUserInfo',(req, res)=>{

})

app.get('/getSkill',(req, res)=>{

})

app.get('/getExperience',(req, res)=>{

})

app.get('/getExpContent',(req, res)=>{

})

app.get('/getEducationInfo',(req, res)=>{

})

app.get('/getCertificate',(req, res)=>{

})

app.get('/getProject',(req, res)=>{

})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})