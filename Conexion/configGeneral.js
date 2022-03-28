const mysql      = require('mysql');
const config = {
  host     : '3306',
  user     : 'root',
  password : 'mysql',
  database : 'ecommerce'
};
const server = 1080;
const pool = mysql.createPool(config);
module.exports = pool,server;
