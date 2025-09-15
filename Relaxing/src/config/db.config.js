const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.BD_USER,
    passwort: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    waiForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection.promise();