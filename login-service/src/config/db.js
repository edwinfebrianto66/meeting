const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

connection.connect(err => {
  if (err) {
    console.error('❌ Gagal koneksi ke MySQL:', err)
    process.exit(1)
  } else {
    console.log('✅ Terhubung ke database MySQL')
  }
})

module.exports = connection
