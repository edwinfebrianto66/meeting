const mysql = require('mysql2');

const connectToDatabase = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'webdev',
    password: process.env.DB_PASSWORD || 'webdev@dk',
    database: process.env.DB_NAME || 'meeting'
  });

  connection.connect((err) => {
    if (err) {
      console.error('❌ Failed to connect to MySQL:', err.message);
      console.log('⏳ Retrying in 5 seconds...');
      setTimeout(connectToDatabase, 5000); // Retry every 5s
    } else {
      console.log('✅ Connected to MySQL!');
      // lanjutkan dengan app.listen atau export connection, dll
    }
  });
};

connectToDatabase();
