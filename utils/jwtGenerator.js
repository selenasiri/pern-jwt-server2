const jwt = require('jsonwebtoken')
require('dotenv').config()

function jwtGenerator(user_id) {
  const payload = {
    user: user_id
  }

  const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1hr' })
  return token
}

module.exports = jwtGenerator
