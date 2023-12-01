const express = require('express');
const cors = require('cors');
const [_, options] = require('./db/connect/maria');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require("connect-redis").default;


const redisClient = redis.createClient( {
    url: "redis://myredis:6379", // local: redis://localhost:6379
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
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    store: redisStore,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 600000,
    },
}))
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
