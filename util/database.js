const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'it114p-webdev'
});

module.exports = pool.promise();