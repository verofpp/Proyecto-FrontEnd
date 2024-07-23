require('dotenv').config();
const mysql = require('mysql');

let db;
try {
    db = mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    
    db.connect();
} catch (error) {
    console.log('Error', error);
}

module.exports = db;
