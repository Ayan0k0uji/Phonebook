const express = require('express');
const sequelize = require('./config/db');
const cookieParser = require('cookie-parser');
const contactRoutes = require('./routes/contact-routes');

const cors = require('cors');

require('./models/contact-models');


const app = express();
const port = 3001;

const host = 'http://localhost:3000';

// ставим корс на приложение
const corsOptions = {
    origin: host,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}


app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.setHeader('Allow-Origin', host);
    res.setHeader('Access-Control-Allow-Origin', host);
    res.setHeader('Access-Control-Allow-Origin', host);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use(cookieParser());
app.use(contactRoutes);


app.listen(port, () => {
    console.log(`TimeStamp app listening on port ${port}`);
});

// проверяем подключение к БД
try {
    sequelize.authenticate;
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}