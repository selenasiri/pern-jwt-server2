const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dba',
  password: 'test123',
  host: 'localhost',
  port: 5432,
  database: 'pern_jwt',
})

module.exports = pool
