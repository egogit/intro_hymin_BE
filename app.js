const express = require('express');
const cors = require('cors');
const pool = require('./db/connect/maria');
const routes = require('./routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello Express!')
})
/*
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
            message:err.message,
            error: err
        }})
    res.send();
})
*/

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
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