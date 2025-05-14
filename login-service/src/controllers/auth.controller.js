const jwt = require('jsonwebtoken')
const db = require('../config/db')

exports.login = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password wajib diisi' })
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?'
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Query error', error: err })

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email atau password salah' })
    }

    const user = results[0]
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

    res.json({ message: 'Login berhasil', token })
  })
}
