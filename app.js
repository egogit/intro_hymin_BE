const express = require('express');
const cors = require('cors');
const [_, options] = require('./db/connect/maria');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require("connect-redis").default;


const redisClient = redis.createClient( {
    url: "redis://localhost:6379",
    maxAge: 60000,});
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
    client: redisClient,
});
require('dotenv').config();


const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(cookieParser())
app.use(session({
    key: 'sessionKey',
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    store: redisStore,
    cookie: {
        secure: false,
        maxAge: 60000,
    },
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
