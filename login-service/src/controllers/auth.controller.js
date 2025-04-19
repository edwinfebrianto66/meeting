const db = require('../config/db')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password wajib diisi' })
  }

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Database error' })
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Email atau password salah' })
      }

      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })

      res.status(200).json({
        message: 'Login berhasil',
        token
      })
    }
  )
}