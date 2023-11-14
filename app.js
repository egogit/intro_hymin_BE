const express = require('express');
const cors = require('cors');
const [_, options] = require('./db/connect/maria');
const routes = require('./routes');

const session = require('express-session');
const Memorystore = require('memorystore')(session);
const cookieParser = require('cookie-parser');

require('dotenv').config();


const app = express();
app.set('port', process.env.PORT || 8080);

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new Memorystore({checkPeriod: 60000}),
    cookie: {maxAge: 60000},
}))
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.get('/', (req, res) => {
    console.log(req.session)
    res.send('Hello Express!')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
