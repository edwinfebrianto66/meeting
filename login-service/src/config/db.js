const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('❌ Error connecting to MySQL:', err.message);
      setTimeout(handleDisconnect, 5000); // 🔥 Retry setiap 5 detik
    } else {
      console.log('✅ Connected to MySQL');
    }
  });

  connection.on('error', (err) => {
    console.error('❌ MySQL error', err.message);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // 🔄 Reconnect otomatis
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;
