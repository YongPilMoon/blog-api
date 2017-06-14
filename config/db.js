module.exports = () => {
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    });
    conn.connect();
    return conn
};