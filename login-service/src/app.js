const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')

const app = express()

app.use(cors({ origin: 'http://localhost:3002' }))
app.use(bodyParser.json())

app.use('/login', authRoutes)

module.exports = app