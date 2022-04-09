const mysql = require('mysql');
const config = {
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'ecommerce'
}

const pool = mysql.createPool(config)

module.exports = pool;

