const mysql      = require('mysql');
const config = {
  host     : '3306',
  user     : 'root',
  password : 'mysql',
  database : 'ecommerce'
};
const servidor = 3000;
const pool = mysql.createPool(config);
module.exports = pool,server;
